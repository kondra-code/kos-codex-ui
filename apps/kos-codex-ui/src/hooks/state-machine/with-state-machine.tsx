import { StateMachineModelImpl } from "@kos-codex/kos-codex-models";
import { useStateMachine } from "./use-state-machine";

interface StateMachineProps {
  stateMachine: StateMachineModelImpl;
}

type HoCStateMachineProps = StateMachineProps;
// react HOC to provide a StateMachine to a component
export function withStateMachine<
  T extends HoCStateMachineProps = HoCStateMachineProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof StateMachineProps>) => {
    const { model, status, KosModelLoader } = useStateMachine();
    console.log(model, status)
    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} stateMachine={model} />
      </KosModelLoader>
    );
  };
}
