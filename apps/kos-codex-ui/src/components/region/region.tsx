import styled from "@emotion/styled";

import {
  kosComponent,
  KosLog,
  useFormattedDate,
  useFormattedTime,
  useKosRegions,
} from "@kosdev-code/kos-ui-sdk";
import { useEffect, useState } from "react";
import { Select } from "../select";

const log = KosLog.createLogger({ name: "region" });
log.debug("region component loaded");

const RegionContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

// extract-code Region
export const Region: React.FunctionComponent = kosComponent(() => {
  //extract-code ignore
  const [now, setNow] = useState(new Date());
  const { regionModel, regionSelectProps } = useKosRegions();

  const { formattedDate } = useFormattedDate({
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
    formatString: regionModel?.selectedDateFormat || "",
  });

  const formattedTime = useFormattedTime(
    now,
    regionModel?.selectedTimeFormat || "",
  );

  // extract-code ignore
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <RegionContainer>
      <div>
        <strong>Unformatted date:</strong> {now.toString()}
      </div>
      <div>
        <strong>Formatted Date & Time:</strong> {formattedDate} -{" "}
        {formattedTime}
      </div>
      <label>Select a region:</label>
      <Select
        onChange={regionSelectProps.onChange}
        value={regionSelectProps.value}
      >
        {regionSelectProps.options}
      </Select>
    </RegionContainer>
  );
});
