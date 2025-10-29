import { kosModel, kosChild, KosModelContainer, DependencyLifecycle, kosServiceRequest } from "@kosdev-code/kos-ui-sdk";
import type {
  KosContextLogger,
  KosCreationContext,
  IKosModelContainer,
  IKosDataModel,
  IKosModelHolder,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";

import type {
  ServiceExampleContainerOptions,
  ServiceExampleOptions,
} from "./types";
import type { ServiceExampleModel } from "./service-example-model";
import { getServiceExampleContainer } from "./services";
import { ServiceExample } from "./service-example-registration";

export const MODEL_TYPE = "service-example-container-model";

export type ServiceExampleContainerModel =
  PublicModelInterface<ServiceExampleContainerModelImpl>;

@kosModel(MODEL_TYPE)
export class ServiceExampleContainerModelImpl
  implements
    IKosIdentifiable,
    IKosModelHolder<ServiceExampleModel>,
    IKosDataModel
{
  id: string;
  private logger: KosContextLogger;
  @kosChild private _models: IKosModelContainer<ServiceExampleModel>;
  constructor(
    modelId: string,
    options: ServiceExampleContainerOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this._models = new KosModelContainer<ServiceExampleModel>({
      parentId: modelId,
    });
    if (options) {
      // Assign options properties here.
    }
  }

  getModel(id: string) {
    return this._models.getModel(id);
  }
  get models() {
    return this._models;
  }
  get data() {
    return this._models.data;
  }

  // extract-code update
  updateServiceExample(data: ServiceExampleOptions[]) {
    data.forEach((trouble) => {
      this.addModel(
        ServiceExample.instance(`TROUBLE_ID_${trouble.id}`)
          .options({ ...trouble })
          .build(),
      );
    });
  }

  updateModel(options: ServiceExampleContainerOptions): void {
    // Update model properties phere.
  }

  addModel(model: ServiceExampleModel) {
    this._models.addModel(model);
  }

  removeModel(id: string) {
    this._models.removeModel(id);
  }

  // extract-code declarative
  @kosServiceRequest({
    path: "/api/system/codex/objects",
    method: "get",
    lifecycle: DependencyLifecycle.READY,
  })
  async fetchData(data: ServiceExampleOptions[]) {
    this.updateServiceExample(data);
  }

  // extract-code initialize
  async init(): Promise<void> {
    this.logger.debug(
      `initializing service-example-container container ${this.id}`,
    );
    const [err, data] = await getServiceExampleContainer();
    if (err) {
      this.logger.error("Unable to access service-example endpoint");
      return;
    } else if (data) {
      this.updateServiceExample(data);
    }
  }

  async load(): Promise<void> {
    this.logger.debug(`loading service-example-container container ${this.id}`);
  }
}
