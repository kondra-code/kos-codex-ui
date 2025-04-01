import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  FutureContainer,
  FutureAwareContainer,
} from "@kosdev-code/kos-ui-sdk";
import { FutureHandler, kosFuture, kosModel } from "@kosdev-code/kos-ui-sdk";

import { startFuture } from "./services";

export const MODEL_TYPE = "futures-model";

export type FuturesModel = PublicModelInterface<FuturesModelImpl>;

// extract-code future-model
@kosModel(MODEL_TYPE)
export class FuturesModelImpl
  implements IKosDataModel, IKosIdentifiable, FutureContainer
{
  id: string;

  // extract-code future-prop
  futureHandler: FutureAwareContainer;

  // extract-code future-constructor
  constructor(modelId: string) {
    this.id = modelId;
    this.futureHandler = new FutureHandler(this);
  }

  // extract-code future-decorator
  @kosFuture()
  async start(trackerId?: string) {
    const [err, data] = await startFuture(trackerId || "");
    if (err) {
      return;
    } else if (data) {
      return data;
    }
    return null;
  }

  // extract-code future-getter
  get future() {
    return this.futureHandler.future;
  }

  // extract-code future-progress
  get progress(): number | undefined {
    return this.future?.progress;
  }

  // extract-code future-timeleft
  get timeLeft(): number | undefined {
    if (!this.future?.remainingTimeMs) {
      return 0;
    }
    return this.future?.remainingTimeMs / 1000;
  }

  // extract-code future-complete
  get isComplete(): boolean {
    return this.future?.endState === "SUCCESS";
  }

  // extract-code future-progress
  get isInProgress(): boolean {
    return !!this.future && !this.future.endState;
  }
}
