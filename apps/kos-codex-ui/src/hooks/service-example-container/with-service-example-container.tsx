import { ServiceExampleContainerModel } from "@kos-codex/kos-codex-models";
import { useServiceExampleContainer } from "./use-service-example-container";

interface ServiceExampleContainerProps {
  troublesContainer: ServiceExampleContainerModel;
}

type HoCServiceExampleContainerProps = ServiceExampleContainerProps;
// react HOC to provide a ServiceExampleContainer to a component
export function withServiceExampleContainer<
  T extends HoCServiceExampleContainerProps = HoCServiceExampleContainerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof ServiceExampleContainerProps>) => {
    const { model, status, KosModelLoader } = useServiceExampleContainer();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} troublesContainer={model} />
      </KosModelLoader>
    );
  };
}
