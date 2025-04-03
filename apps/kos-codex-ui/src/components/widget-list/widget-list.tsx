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
        <Button onClick={() => widgetContainer.createWidget()} type="button">
          Create
        </Button>
      </WidgetListContainer>
    );
  },
);
export default withWidgetContainer(WidgetList);

const Widget = kosComponent(({ widget }: { widget: WidgetModel }) => {
  return (
    <div>
      {widget.id} : {widget.description}
    </div>
  );
});
