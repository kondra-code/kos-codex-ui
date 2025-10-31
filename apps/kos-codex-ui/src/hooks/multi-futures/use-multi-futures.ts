import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { MultiFutures, MultiFuturesModelImpl } from "@kos-codex/kos-codex-models";

export const useMultiFutures = (id: string) => {
  const modelId = id;
  const result = useKosModel<MultiFuturesModelImpl>({
    modelId,
    modelType: MultiFutures.type,
    options: {},
  });

  return result;
};
