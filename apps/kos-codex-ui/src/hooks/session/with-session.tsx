import { SessionModel } from "@kos-codex/kos-codex-models";
import { useSession } from "./use-session";

interface SessionProps {
  session: SessionModel;
}

type HoCSessionProps = SessionProps;
// react HOC to provide a Session to a component
export function withSession<T extends HoCSessionProps = HoCSessionProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: Omit<T, keyof SessionProps>) => {
    const { model, status, KosModelLoader } = useSession();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} session={model} />
      </KosModelLoader>
    );
  };
}
