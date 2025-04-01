import { ServiceExampleModel } from "@kos-codex/kos-codex-models";
import { useServiceExample } from "./use-service-example";

interface ServiceExampleProps {
  troubles: ServiceExampleModel;
}

interface Identifiable {
  id: string;
}

type HoCServiceExampleProps = ServiceExampleProps & Identifiable;
// react HOC to provide a ServiceExample to a component
export function withServiceExample<
  T extends HoCServiceExampleProps = HoCServiceExampleProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof ServiceExampleProps>) => {
    const { model, status, KosModelLoader } = useServiceExample(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} troubles={model} />
      </KosModelLoader>
    );
  };
}
