import styled from "@emotion/styled";
import { Header } from "./header";
import CoreConceptLogo from "../../assets/core-concepts.svg";
import DispenserConceptsLogo from "../../assets/dispenser-concepts.svg";
import FreestyleConceptsLogo from "../../assets/freestyle-concepts.svg";
import RightCaretIcon from "../../assets/right-caret.svg";

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 930px;
  margin: 0 auto;
  padding: 48px 20px;
`;

const ListTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
  border: 0;
`;

const Item = styled.div`
  border: 1px solid #0000000f;
  border-radius: 8px;
  padding-right: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 16px 0px #0000001a;
  display: flex;
  align-items: center;
  gap: 32px;
  overflow: hidden;
`;

const ItemLogo = styled.div<{
  backgroundColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 104px;
  min-height: 104px;
  align-self: stretch;
  box-sizing: border-box;
  img {
    position: relative;
  }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  padding: 8px 0;
`;

const ItemTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: 0;
`;
const ItemDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 0;
`;

const LinkText = styled.a<{ disabled?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.disabled ? "#ccc" : "#0293dc")};
  min-width: 142px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightCaret = () => (
  <img src={RightCaretIcon} width="16px" alt="Right caret" />
);

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <ItemList>
        <ListTitle>Available Concepts</ListTitle>
        <Item>
          <ItemLogo backgroundColor="#FFB400">
            <img
              style={{ top: 5, left: 5 }}
              src={CoreConceptLogo}
              alt="Core Concepts"
            />
          </ItemLogo>
          <ItemText>
            <ItemTitle>Core Concepts</ItemTitle>
            <ItemDescription>
              Explore all core concepts used in KOS Studio ecosystem.
            </ItemDescription>
          </ItemText>
          <LinkText href="index.html?path=/docs/foundations-1-an-introduction-to-models--docs">
            Find&nbsp;Out&nbsp;More <RightCaret />
          </LinkText>
        </Item>
        <Item>
          <ItemLogo backgroundColor="#09BAEE">
            <img
              style={{ top: 5, left: 5 }}
              src={DispenserConceptsLogo}
              alt="Dispenser Concepts"
            />
          </ItemLogo>
          <ItemText>
            <ItemTitle>Core Concepts</ItemTitle>
            <ItemDescription>
              Explore all concepts related to the dispenser functionality.
            </ItemDescription>
          </ItemText>
          <LinkText disabled>Coming Soon</LinkText>
        </Item>
        <Item>
          <ItemLogo backgroundColor="#FF5A00">
            <img
              style={{ top: 5, left: 0 }}
              src={FreestyleConceptsLogo}
              alt="Freestyle Concepts"
            />
          </ItemLogo>
          <ItemText>
            <ItemTitle>Core Concepts</ItemTitle>
            <ItemDescription>
              Explore all core concepts used in KOS Studio ecosystem.
            </ItemDescription>
          </ItemText>
          <LinkText disabled>Coming Soon</LinkText>
        </Item>
      </ItemList>
    </div>
  );
};
