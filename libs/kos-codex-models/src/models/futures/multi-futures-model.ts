import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  FutureContainer,
  FutureAwareContainer,
  KosMultipleFutureAwareFull,
} from "@kosdev-code/kos-ui-sdk";
import { FutureHandler, kosFuture, kosModel, kosMultipleFutureAware } from "@kosdev-code/kos-ui-sdk";

import { startFuture } from "./services";

export const MODEL_TYPE = "multi-futures-model";

// Type intersection provides access to all named future properties
export type MultiFuturesModelType = KosMultipleFutureAwareFull<
  "foo" | "bar"
>;

// Interface merging for complete type safety
export interface MultiFuturesModelImpl extends MultiFuturesModelType {}

// extract-code multi-future-model
@kosModel(MODEL_TYPE)
@kosMultipleFutureAware()
export class MultiFuturesModelImpl
  implements IKosDataModel
{
  id: string;

  constructor(modelId: string) {
    this.id = modelId;
  }

  @kosFuture({
    alias: "foo"
  })
  async start(trackerId?: string) {
    const [err, data] = await startFuture(trackerId || "");
    if (err) {
      return;
    } else if (data) {
      return data;
    }
    return null;
  }

  @kosFuture({
    alias: "bar"
  })
  async startBar(trackerId?: string) {
    const [err, data] = await startFuture(trackerId || "");
    if (err) {
      return;
    } else if (data) {
      return data;
    }
    return null;
  }

  get fooTimeLeft(): number | undefined {
    if (!this.fooFuture?.remainingTimeMs) {
      return 0;
    }
    return this.fooFuture?.remainingTimeMs / 1000;
  }

  get isFooComplete(): boolean {
    return this.fooFuture?.endState === "SUCCESS";
  }

  get isFooInProgress(): boolean {
    return !!this.fooFuture && !this.fooFuture.endState;
  }


  get barTimeLeft(): number | undefined {
    if (!this.future?.remainingTimeMs) {
      return 0;
    }
    return this.future?.remainingTimeMs / 1000;
  }

  get isBarComplete(): boolean {
    return this.future?.endState === "SUCCESS";
  }

  get isBarInProgress(): boolean {
    return !!this.future && !this.future.endState;
  }
}
