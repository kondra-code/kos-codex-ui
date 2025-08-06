import styled from "@emotion/styled";
import { WidgetContainerModel, WidgetModel } from "@kos-codex/kos-codex-models";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { withWidgetContainer } from "../../hooks";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "widget-list" });
log.debug("widget-list component loaded");

const WidgetListContainer = styled.div``;

interface Props {
  widgetContainer: WidgetContainerModel;
}
export const WidgetList: React.FunctionComponent<Props> = kosComponent(
  ({ widgetContainer }: Props) => {
    const assignments = widgetContainer.data;
    return (
      <WidgetListContainer>
        {assignments.map((widget) => {
          return <Widget key={widget.id} widget={widget} />;
        })}
        <Button
          onClick={() =>
            widgetContainer.createWidget({
              description: `Description for item ${assignments.length + 1}`,
            })
          }
          type="button"
        >
          Create
        </Button>
      </WidgetListContainer>
    );
  },
);
export default withWidgetContainer(WidgetList);

const Widget = kosComponent(({ widget }: { widget: WidgetModel }) => {
  return (
    <WidgetStyle>
      {widget.id} : {widget.description}
    </WidgetStyle>
  );
});

const WidgetStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  background-color: #f9f9f9;
`;
