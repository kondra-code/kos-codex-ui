import type {
  KosContextLogger,
  KosCreationContext,
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosStateMachineAware,
} from "@kosdev-code/kos-ui-sdk";
import { kosModel, kosStateEntry, kosStateExit, kosStateGuard, kosStateMachine } from "@kosdev-code/kos-ui-sdk";

import type { StateMachineOptions } from "./types";

export const MODEL_TYPE = "state-machine-model";

// extract-code states
enum MachineState {
  IDLE = "IDLE",
  POURING = "POURING",
  POUR_CANCELING = "POUR_CANCELING"
}

// extract-code events
type MachineEvent =
  | "START_POUR"
  | "POUR_ACTIVE"
  | "CANCEL_POUR"
  | "POUR_CANCELED"
  | "POUR_COMPLETED";

export interface StateMachineModelImpl
  extends KosStateMachineAware<MachineState, MachineEvent> {}

// extract-code state-machine-model 
@kosModel(MODEL_TYPE)
@kosStateMachine<MachineState, MachineEvent>(
  {
    initial: MachineState.IDLE,
    states: {
      [MachineState.IDLE]: {
        on: { START_POUR: MachineState.POURING },
      },
      [MachineState.POURING]: {
        on: {
          CANCEL_POUR: MachineState.POUR_CANCELING,
          POUR_COMPLETED: MachineState.IDLE,
        },
      },
      [MachineState.POUR_CANCELING]: {
        on: { POUR_CANCELED: MachineState.IDLE, START_POUR: MachineState.POURING },
      },
    },
  }
)
export class StateMachineModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  private logger: KosContextLogger;

  constructor(
    modelId: string,
    options: StateMachineOptions,
    context: KosCreationContext,
  ) {
    this.id = modelId;
    this.logger = context.logger;
  }

  @kosStateEntry(MachineState.POURING)
  onPouringEntry() {
    this.logger.info(`Entering POURING state in state-machine ${this.id}`);
  }


  @kosStateExit(MachineState.POUR_CANCELING)
  onPourCancelingExit() {
    this.logger.info(`Exiting POUR_CANCELING state in state-machine ${this.id}`);
  }

  @kosStateGuard({ allowedStates: [MachineState.IDLE] })
  startPour() {
    this.transition("START_POUR");
  }


  @kosStateGuard({ allowedStates: [MachineState.POURING] })
  cancelPour() {
    this.transition("CANCEL_POUR");
  }

  @kosStateGuard({ allowedStates: [MachineState.POUR_CANCELING] })
  resetPour() {
    this.transition("POUR_CANCELED");
  }

  get isPouring(): boolean {
    return this.currentState === MachineState.POURING;
  }

  get isCancellingPour(): boolean {
    return this.currentState === MachineState.POUR_CANCELING;
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    this.logger.debug(`initializing state-machine ${this.id}`);
  }

  async load(): Promise<void> {
    this.logger.debug(`loading state-machine ${this.id}`);
  }
}
