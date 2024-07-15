import styled from "styled-components";
import { FONT_SIZES } from "../theme";

const WrapRoom = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 7.5fr;

  width: 100%;
  height: 100%;

  gap: 1rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  height: 22rem;
`;

const Copyright = styled.span`
  display: flex;
  justify-content: center;

  width: 25rem;
  padding: 0 2rem;

  text-align: center;
  font-size: ${FONT_SIZES["body-2"]};
`;

export { WrapRoom, LeftWrapper, RightWrapper, LeftFooter, Copyright };
