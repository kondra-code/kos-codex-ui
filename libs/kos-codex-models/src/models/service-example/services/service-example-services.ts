import {
  KosLog,
  type ClientResponse,
  type DeepRequired,
  type ElementType,
  type ServiceResponse,
} from "@kosdev-code/kos-ui-sdk";

import API, { type KosApi, type ApiPath } from "../../../utils/service";

const log = KosLog.createLogger({
  name: "service-example-container-service",
  group: "Services",
});

const SERVICE_PATH: ApiPath = "/api/system/codex/list";
export type ServiceExampleContainerClientResponse = ClientResponse<
  KosApi,
  typeof SERVICE_PATH,
  "get"
>;
export type ServiceExampleContainerResponse = DeepRequired<
  ElementType<ServiceExampleContainerClientResponse>
>;

/**
 * @category Service
 * Retrieves the initial list of  service-example-container data.
 */
export const getServiceExampleContainer = async (): Promise<
  ServiceResponse<ServiceExampleContainerClientResponse>
> => {
  log.debug("sending GET for  service-example-container");
  return await API.get(SERVICE_PATH);
};
