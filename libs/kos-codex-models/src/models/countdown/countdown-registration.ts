import { SingletonKosModelRegistrationFactory } from "@kosdev-code/kos-ui-sdk";
import type { CountdownModel } from "./countdown-model";
import { CountdownModelImpl, MODEL_TYPE } from "./countdown-model";
import type { CountdownOptions } from "./types";

// extract-code registration
export const Countdown = new SingletonKosModelRegistrationFactory<
  CountdownModel,
  CountdownOptions
>({
  class: CountdownModelImpl,
  type: MODEL_TYPE,
});
