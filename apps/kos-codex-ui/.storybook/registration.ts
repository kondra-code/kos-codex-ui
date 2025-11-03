import { KosModelRegistry } from "@kosdev-code/kos-freestyle-sdk";
import { initKosProvider } from "@kosdev-code/kos-ui-sdk";

import {
  Color,
  Counter,
  ServiceExampleContainer,
  TeamContainer,
  UserContainer,
  Device as DeviceModel,
  UnitExample,
  WidgetContainer,
  Futures,
  Countdown,
  Session,
  MultiFutures,
  StateMachine,
} from "@kos-codex/kos-codex-models";

KosModelRegistry.dispense
  .models()
  .model(Counter)
  .model(UnitExample)
  .model(WidgetContainer)
  .model(TeamContainer)
  .model(UserContainer)
  .model(ServiceExampleContainer)
  .model(Futures)
  .model(MultiFutures)
  .model(DeviceModel)
  .model(StateMachine)
  .model(Color)
  .model(Countdown)
  .model(Session)
  .companion(Counter.type, Countdown.type);

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
