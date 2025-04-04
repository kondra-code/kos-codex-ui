import styled from "@emotion/styled";

import { kosComponent, KosLog, useTimer } from "@kosdev-code/kos-ui-sdk";
import { withSession } from "../../hooks";
import { SessionModel } from "@kos-codex/kos-codex-models";
import { useState } from "react";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "timer" });
log.debug("timer component loaded");

const TimerContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

interface Props {
  session: SessionModel;
}

// extract-code timer-with-warning
export const TimerWithWarning: React.FunctionComponent<Props> = kosComponent(
  ({ session }) => {
    const { createTimerWithWarning, reset } = session;

    return (
      <TimerContainer>
        {session.message ? (
          session.message
        ) : (
          <Button onClick={() => createTimerWithWarning()} type="button">
            Start
          </Button>
        )}
        <ButtonContainer>
          <Button onClick={() => reset()}>Reset</Button>
        </ButtonContainer>
      </TimerContainer>
    );
  },
);

// extract-code timer-export
export default withSession(TimerWithWarning);
