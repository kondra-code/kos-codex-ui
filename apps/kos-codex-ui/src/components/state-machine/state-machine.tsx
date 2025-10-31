import styled from "@emotion/styled";

import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { withStateMachine } from "../../hooks";
import { StateMachineModelImpl } from "@kos-codex/kos-codex-models";
import { Button } from "../button";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

const Heading = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

export interface StateMachineProps {
    stateMachine: StateMachineModelImpl
}

// extract-code StateMachine
export const StateMachine: React.FunctionComponent<StateMachineProps> = kosComponent(({ stateMachine }) => {
  return (
    <LayoutContainer>
      <Heading>Current state</Heading>
      {stateMachine.currentState}
      <Button onClick={() => stateMachine.startPour()} type="button" disabled={stateMachine.isPouring}>
        Start Pour
      </Button>      
      {stateMachine.isPouring && <Button onClick={() => stateMachine.cancelPour()} type="button">
        Cancel Pour
      </Button>}
       {stateMachine.isCancellingPour && <Button onClick={() => stateMachine.resetPour()} type="button">
        Yes, Cancel
      </Button>}
    </LayoutContainer>
  );
});

export default withStateMachine(StateMachine);
