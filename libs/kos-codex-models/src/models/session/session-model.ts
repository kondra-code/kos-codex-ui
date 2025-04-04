import type {
  IKosDataModel,
  IKosIdentifiable,
  PublicModelInterface,
  KosTimer,
} from "@kosdev-code/kos-ui-sdk";
import {
  kosAction,
  kosModel,
  kosTopicHandler,
  TIMER_END,
  TIMER_EVENT,
  TimerManager,
} from "@kosdev-code/kos-ui-sdk";

export const MODEL_TYPE = "session-model";

export type SessionModel = PublicModelInterface<SessionModelImpl>;

@kosModel(MODEL_TYPE)
export class SessionModelImpl implements IKosDataModel, IKosIdentifiable {
  id: string;
  timer!: KosTimer;
  message?: string;
  timerStatus!: "inactive" | "active" | "paused" | "finished";

  constructor(modelId: string) {
    this.id = modelId;

    console.log("starting session");
    this.createTimer();
  }

  // extract-code session-model-timer
  @kosTopicHandler({
    topic: TIMER_EVENT,
    websocket: false,
  })
  handleTimer(message: { name: string; action: string }) {
    if (message.action === TIMER_END) {
      this.timerStatus = "finished";
    }
  }

  start = () => {
    if (this.timerStatus === "finished") this.timer?.reset();
    if (this.timer) {
      this.timer.start();
      this.timerStatus = "active";
    }
  };

  pause = () => {
    if (this.timer) {
      this.timer.pause();
      this.timerStatus = "paused";
    }
  };

  reset = () => {
    if (this.timer) {
      this.timer.reset();
      this.timerStatus = "inactive";
    }
  };

  // extract-code create-timer
  createTimer() {
    this.timer = TimerManager.createTimer("sessionTimer", 3) as KosTimer;
  }

  // extract-code create-timer-with-warning
  createTimerWithWarning = () => {
    this.message = "Timer started";
    this.timer = TimerManager.createTimer("sessionData", 10, [
      {
        name: "Warning",
        action: (name, timeRemaining) => {
          this.message = `${timeRemaining} seconds left`;
        },
        remainingTime: 5,
      },
      {
        name: "End",
        action: (name, timeRemaining) => {
          this.message = `Timer finished`;
          this.timerStatus = "finished";
        },
        remainingTime: 0,
      },
    ])!;
    this.timer.start();
  };
}
