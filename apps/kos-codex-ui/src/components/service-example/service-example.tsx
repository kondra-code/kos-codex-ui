import styled from "@emotion/styled";

import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { useServiceExampleContainer } from "../../hooks";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

const Heading = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

// extract-code ServiceExample
export const ServiceExample: React.FunctionComponent = kosComponent(() => {
  const { model } = useServiceExampleContainer();
  return (
    <LayoutContainer>
      <Heading>List of Available Troubles</Heading>
      {model?.data.map((troubles) => (
        <div key={troubles.id}>
          ID: {troubles.id} - {troubles.description}
        </div>
      ))}
    </LayoutContainer>
  );
});

export default ServiceExample;
