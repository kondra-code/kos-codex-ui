import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { StateMachine, StateMachineModel } from "@kos-codex/kos-codex-models";

export const useStateMachine = () => {
  const modelId = StateMachine.type;
  const result = useKosModel<StateMachineModel>({
    modelId,
    modelType: StateMachine.type,
    options: {},
  });

  return result;
};
