import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel } from "@kosdev-code/kos-ui-sdk";

import type { SessionOptions } from "./types";

export const MODEL_TYPE = "session-model";

export type SessionModel = PublicModelInterface<SessionModelImpl>;

@kosModel(MODEL_TYPE)
export class SessionModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  constructor(
    modelId: string,
    options: SessionOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;

    if (options) {
      // Assign options properties here.
    }
  }

  updateModel(options: SessionOptions): void {
    // Update model properties here.
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing session ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading session ${this.id}`);
  }
}
