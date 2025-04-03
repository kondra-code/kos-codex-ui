import {
  FutureResponse,
  KosLog,
  resolveServiceUrl,
  ServiceFactory,
} from "@kosdev-code/kos-ui-sdk";

const { URL } = resolveServiceUrl();

const { postModel } = ServiceFactory.build({
  basePath: `${URL}/api/system/codex/objects/additional-data/10`,
});
/**
 * @category Service
 * Retrieves the initial  futures data.
 */
export const startFuture = async (tracker: string) => {
  const response = await postModel<FutureResponse>({
    tracker,
    model: {
      id: tracker,
    },
  });
  if (!response) {
    return ["No response", null];
  }

  if (response.status !== 200) {
    return ["Unknown error", null];
  }

  return [null, response.data];
};
