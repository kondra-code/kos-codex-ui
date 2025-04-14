import styled from "@emotion/styled";
import headerBackground from "../../assets/header-background.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  background: black;
  justify-content: center;
  color: white;
  width: 100%;
  background-image: url(${headerBackground});
  background-position: right;
  background-repeat: no-repeat;
  padding: 40px 20px;
  position: relative;
  align-items: center;
  box-sizing: border-box;
`;

export const BottomBorder = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    #82e1ff 3.18%,
    #78e6a0 31.25%,
    #ffb400 60.58%,
    #ff8700 88.89%
  );
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 930px;
  max-width: 100wv;
  gap: 12px;
`;

export const HeaderText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  color: white;
`;

export const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: white;
  margin: 0;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <TextWrap>
        <HeaderText>Welcome to KOS Codex!</HeaderText>
        <Description>
          Explore all concepts used in KOS Studio ecosystem. Click a category to
          start testing components
        </Description>
      </TextWrap>
      <BottomBorder />
    </HeaderWrapper>
  );
};
