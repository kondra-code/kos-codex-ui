import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import {
  ServiceExample,
  ServiceExampleModel,
} from "@kos-codex/kos-codex-models";

export const useServiceExample = (id: string) => {
  const modelId = id;
  const result = useKosModel<ServiceExampleModel>({
    modelId,
    modelType: ServiceExample.type,
    options: {},
  });

  return result;
};
