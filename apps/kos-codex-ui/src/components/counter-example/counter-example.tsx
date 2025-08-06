import styled from "@emotion/styled";
import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { useColor, useCounter, withCounter } from "../../hooks";
import { CounterModel } from "@kos-codex/kos-codex-models";
import { Button } from "../button";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.color || "transparent"};
  padding: 16px;
  border-radius: 8px;
`;

const CountDisplay = styled.div`
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 4px;
`;

// extract-code CounterExample
export const CounterExample: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();

  const { count } = model || {};

  return (
    <Main>
      <CountDisplay>Active Count: {count}</CountDisplay>
    </Main>
  );
});

// extract-code CounterWithToggle
export const CounterWithToggle: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();

  const { count, toggleCounter, isCounting } = model || {};

  return (
    <Main>
      <CountDisplay>Active Count: {count}</CountDisplay>
      <Button onClick={toggleCounter} type="button">
        {isCounting ? "Stop" : "Start"}
      </Button>
    </Main>
  );
});

// extract-code CounterWithColor
export const CounterWithColor: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();
  const { model: colorModel } = useColor();

  const { count, toggleCounter, isCounting } = model || {};
  const { color } = colorModel || {};

  return (
    <Main color={color}>
      <CountDisplay>Active Count: {count}</CountDisplay>
      <Button onClick={toggleCounter} type="button">
        {isCounting ? "Stop" : "Start"}
      </Button>
    </Main>
  );
});

// extract-code CounterWithHOC
const Counter: React.FunctionComponent<{
  counter: CounterModel;
}> = kosComponent(({ counter }: { counter: CounterModel }) => {
  return (
    <Main>
      <CountDisplay>Active Count: {counter.count}</CountDisplay>
    </Main>
  );
});
// extract-code CounterHOCDeclaration
export const CounterWithHOC = withCounter(Counter);

export default CounterExample;
