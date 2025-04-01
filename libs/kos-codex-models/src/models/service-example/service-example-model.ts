import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel } from "@kosdev-code/kos-ui-sdk";

import type { ServiceExampleOptions } from "./types";

export const MODEL_TYPE = "service-example-model";

export type ServiceExampleModel = PublicModelInterface<ServiceExampleModelImpl>;

@kosModel(MODEL_TYPE)
export class ServiceExampleModelImpl
  implements IKosDataModel, IKosIdentifiable
{
  id: string;
  numId?: number;
  description?: string;
  isResolvable?: boolean;
  type?: string;
  private logger: KosContextLogger;

  // extract-code ServiceExampleConstructor
  constructor(
    modelId: string,
    options: ServiceExampleOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    if (options) {
      this.description = options.desc;
    }
  }

  updateModel(options: Record<string, never>): void {
    // Update model properties here.
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing service-example ${this.id}`);
  }

  async ready(): Promise<void> {
    this.logger.debug(`loading service-example ${this.id}`);
  }
}
