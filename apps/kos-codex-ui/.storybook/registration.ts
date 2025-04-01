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
} from "@kos-codex/kos-codex-models";

import { DispenseExtensionManager } from "@kosdev-code/kos-dispense-sdk";

KosModelRegistry.dispense
  .models()
  .model(Counter)
  .model(UnitExample)
  .model(WidgetContainer)
  .model(TeamContainer)
  .model(UserContainer)
  .model(ServiceExampleContainer)
  .model(Futures)
  .model(DeviceModel)
  .model(Color)
  .model(Countdown)
  .companion(Counter.type, Countdown.type);

const dispenseExtensionManager = new DispenseExtensionManager();

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
