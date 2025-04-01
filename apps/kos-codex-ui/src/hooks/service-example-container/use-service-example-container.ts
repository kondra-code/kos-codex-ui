import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import {
  ServiceExampleContainer,
  ServiceExampleContainerModel,
} from "@kos-codex/kos-codex-models";

export const useServiceExampleContainer = () => {
  const modelId = ServiceExampleContainer.type;
  const result = useKosModel<ServiceExampleContainerModel>({
    modelId,
    modelType: ServiceExampleContainer.type,
    options: {},
  });

  return result;
};
