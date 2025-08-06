import styled from "@emotion/styled";
import { convert, useKosRegions } from "@kosdev-code/kos-ui-sdk";
import { ChangeEvent, useState } from "react";
import { Input } from "../input";

const UnitLayout = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// extract-code units-demo
export const Units = () => {
  const [value, setValue] = useState("2000");
  const { regionData } = useKosRegions();
  const targetUnit = regionData?.unitSystemId === "si" ? "ml" : "fluid-ounce";
  const inLocalUnits = convert(Number(value), "ml", targetUnit);
  return (
    <UnitLayout>
      <Row>
        <strong>Volume in mL</strong>
        <Input
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </Row>
      <Row>
        <strong>In region units: </strong>
        {inLocalUnits} {targetUnit}
      </Row>
    </UnitLayout>
  );
};
