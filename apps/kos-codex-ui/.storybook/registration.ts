import {
  Application,
  CopyLogs,
  DDKModels,
  Door,
  FcmPump,
  LfcvPump,
  Lockout,
} from "@kosdev-code/kos-ddk-models";
import { Pump } from "@kosdev-code/kos-dispense-sdk";
import { Device, registerLegacyModel } from "@kosdev-code/kos-ui-sdk";

import { pumpTypeFactory } from "@kosdev-code/kos-ddk-model-components";
import {
  KosExtensionManager,
  KosModelRegistry,
} from "@kosdev-code/kos-freestyle-sdk";
import { initKosProvider } from "@kosdev-code/kos-ui-sdk";

import {
  Color,
  Counter,
  TroublesContainer,
  TeamContainer,
  UserContainer,
  Device as DeviceModel,
  UnitExample,
  WidgetContainer,
  Futures,
  Countdown,
} from "@kos-codex/kos-codex-models";

KosModelRegistry.dispense
  .models()
  .model(CopyLogs)
  .model(Device)
  .model(Door)
  .model(FcmPump)
  .model(LfcvPump)
  .model(Counter)
  .model(UnitExample)
  .model(WidgetContainer)
  .model(TeamContainer)
  .model(UserContainer)
  .model(TroublesContainer)
  .model(Futures)
  .model(DeviceModel)
  .model(Color)
  .model(Countdown)
  .model(Lockout)
  .companion(Pump.type, pumpTypeFactory)
  .companion(Counter.type, Countdown.type)
  .preload(Application.type);

Object.keys(DDKModels).forEach((key) => {
  const model = DDKModels[key];
  registerLegacyModel(KosModelRegistry)(key, model);
});

const ext = new KosExtensionManager();
ext.freestyle.initializeFreestyleExtension();

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
