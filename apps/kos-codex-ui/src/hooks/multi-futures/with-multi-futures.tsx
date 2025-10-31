import { MultiFuturesModelImpl } from "@kos-codex/kos-codex-models";
import { useMultiFutures } from "./use-multi-futures";

interface MultiFuturesProps {
  futures: MultiFuturesModelImpl;
}

interface Identifiable {
  id: string;
}

type HoCMultiFuturesProps = MultiFuturesProps & Identifiable;
// react HOC to provide a MultiFutures to a component
export function withMultiFutures<T extends HoCMultiFuturesProps = HoCMultiFuturesProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: Omit<T, keyof MultiFuturesProps>) => {
    const { model, status, KosModelLoader } = useMultiFutures(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} futures={model} />
      </KosModelLoader>
    );
  };
}
