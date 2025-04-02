import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel, kosModelEffect } from "@kosdev-code/kos-ui-sdk";

import type { WidgetOptions } from "./types";

export const MODEL_TYPE = "widget-model";

export type WidgetModel = PublicModelInterface<WidgetModelImpl>;

@kosModel(MODEL_TYPE)
export class WidgetModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  description!: string;

  constructor(modelId: string, options: WidgetOptions) {
    this.id = modelId;

    if (options) {
      this.description = options.desc || "";
    }
  }

  updateModel(options: WidgetOptions): void {
    // Update model properties here.
  }

  // extract-code kosModelEffect
  @kosModelEffect({
    dependencies: (model) => [model.description],
  })
  protected handleInsertion() {
    if (this.description) {
      // Handle insertion logic here.
    }
  }
}
