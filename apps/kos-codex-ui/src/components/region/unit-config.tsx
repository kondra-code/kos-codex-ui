import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { withUnitExample } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { UnitExampleModel } from "@kos-codex/kos-codex-models";
import { Input } from "../input";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "config-property" });
log.debug("config-property component loaded");

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const FormLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  input {
    text-align: left;
  }
`;

interface Props {
  unitExample: UnitExampleModel;
}

// extract-code unit-config
export const UnitConfig: React.FunctionComponent<Props> = kosComponent(
  ({ unitExample }: Props) => {
    const [value, setValue] = useState(unitExample.volume.value);

    return (
      <LayoutContainer>
        The volume is {unitExample.volume.displayValue}, but is stored as{" "}
        {unitExample.volume.rawValue} (in ml).
        <FormLayout>
          <Input
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(Number(e.target.value))
            }
            type="number"
          />
          <Button
            onClick={() => {
              unitExample.volume.updateProperty(Number(value));
              setValue(() => unitExample.volume.value);
            }}
            type="button"
          >
            Change Limit
          </Button>
        </FormLayout>
      </LayoutContainer>
    );
  },
);

// extract-code unit-config-export
export default withUnitExample(UnitConfig);
