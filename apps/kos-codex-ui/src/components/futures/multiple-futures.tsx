import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { FuturesModel, MultiFuturesModelImpl } from "@kos-codex/kos-codex-models";
import { Button } from "../button";
import { withMultiFutures } from "../../hooks/multi-futures";
import { Text } from "@kosdev-code/kos-ddk-components";

const log = KosLog.createLogger({ name: "futures" });
log.debug("futures component loaded");


const FuturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f1f1f1;
  border: 1px solid rgba(76, 175, 80, 0.5);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props: { progress: number }) => props.progress}%;
    transition: width 1.5s;
    background-color: #4caf50;
  }
`;

interface Props {
  futures: MultiFuturesModelImpl;
}

// extract-code multi-futures-component
export const MultiFutures: React.FunctionComponent<Props> = kosComponent(
  ({ futures }: Props) => {
    return (
        <FuturesContainer>
      <FuturesContainer>
        <Text>Foo Future</Text>
        <Button
          onClick={() => futures.start()}
          disabled={futures.isFooInProgress}
          type="button"
        >
          {futures.isFooInProgress ? "Foo In Progress" : "Start Foo"}
        </Button>
        {futures.progress !== undefined ? (
          <ProgressBar progress={futures.fooProgress} />
        ) : null}
        {futures.isBarComplete ? <div>Complete</div> : null}
      </FuturesContainer>
            <FuturesContainer>
                <Text>Bar Future</Text>
        <Button
          onClick={() => futures.start()}
          disabled={futures.isBarInProgress}
          type="button"
        >
          {futures.isBarInProgress ? "Bar In Progress" : "Start Bar"}
        </Button>
        {futures.progress !== undefined ? (
          <ProgressBar progress={futures.progress} />
        ) : null}
        {futures.isBarComplete ? <div>Complete</div> : null}
      </FuturesContainer>
      </FuturesContainer>
    );
  },
);

export default withMultiFutures(MultiFutures);
