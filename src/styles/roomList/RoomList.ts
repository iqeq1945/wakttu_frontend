import styled from 'styled-components';
import { FONT_SIZES } from '../theme';

const WrapRoomList = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 7.5fr;

  width: 100vw;
  height: 100vh;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  gap: 1rem;
`;

const RightWrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const Copyright = styled.span`
  display: flex;
  justify-content: center;

  width: 25rem;
  padding: 0 2rem;

  text-align: center;
  font-size: ${FONT_SIZES['body-2']};
`;

export { WrapRoomList, LeftWrapper, RightWrapper, Copyright };
