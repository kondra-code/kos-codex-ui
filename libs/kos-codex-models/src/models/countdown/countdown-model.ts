import type {
  IKosDataModel,
  IKosIdentifiable,
  KosContextLogger,
  KosCreationContext,
  PublicModelInterface,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel } from "@kosdev-code/kos-ui-sdk";

import type { CountdownOptions } from "./types";

import type { CounterModel } from "../counter";

export const MODEL_TYPE = "countdown-model";

export type CountdownModel = PublicModelInterface<CountdownModelImpl>;

// extract-code countdown
@kosModel(MODEL_TYPE)
export class CountdownModelImpl
  implements IKosDataModel, IKosIdentifiable, CounterModel
{
  id: string;
  private logger: KosContextLogger;
  private counter: CounterModel;
  constructor(
    modelId: string,
    options: CountdownOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
    this.counter = options.companionParent;
    this.logger.info(`creating countdown ${this.id}`);
  }

  // Counter Interface
  get count(): number {
    return this.counter.count;
  }
  get interval(): NodeJS.Timeout | null {
    return this.counter.interval;
  }
  increment(): void {
    this.counter.increment();
  }
  stopCounter(): void {
    this.counter.stopCounter();
  }
  startCounter(): void {
    this.counter.startCounter();
  }
  toggleCounter() {
    this.counter.toggleCounter();
  }
  get isCounting(): boolean {
    return this.counter.isCounting;
  }

  // Countdown Properties

  get timeRemaining() {
    return Math.max(30 - this.counter.count, 0);
  }

  reset = () => {
    this.counter.stopCounter();
    this.counter.count = 0;
    this.counter.startCounter();
  };

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing countdown ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading countdown ${this.id}`);
  }
}
