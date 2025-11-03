import {
  Color,
  Countdown,
  Counter,
  Device,
  Futures,
  MultiFutures,
  ServiceExampleContainer,
  Session,
  StateMachine,
  TeamContainer,
  UnitExample,
  WidgetContainer,
} from "@kos-codex/kos-codex-models";
import { initKosProvider, KosModelRegistry } from "@kosdev-code/kos-ui-sdk";

// extract-code registration
const Registration = KosModelRegistry.core.models().model(Counter);

Registration.model(Color)
  .model(UnitExample)
  .model(WidgetContainer)
  .model(TeamContainer)
  .model(ServiceExampleContainer)
  .model(Futures)
  .model(Color)
  .model(Countdown)
  .model(Session)
  .model(Device)
  .model(MultiFutures)
  .model(StateMachine)
  .companion(Counter.type, Countdown.type);

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
