import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Session, SessionModel } from "@kos-codex/kos-codex-models";

export const useSession = () => {
  const modelId = Session.type;
  const result = useKosModel<SessionModel>({
    modelId,
    modelType: Session.type,
    options: {},
  });

  return result;
};
