import styled from "styled-components";
import { COLORS } from "../theme";
import { CosmeticVariant } from "../book/CosmeticType";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const LeftWrapper = styled.div`
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1.5rem 0;
  gap: 0.625rem;
`;

const Character = styled.div`
  display: flex;
  gap: 0.625rem;

  width: 44.75rem;
`;

const MyCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 19.8125rem;
  height: 27.125rem;
  gap: 1rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

const CharacterImage = styled.img`
  width: 10.4375rem;
  height: 10.0625rem;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem ;
`;

const UserIcon = styled.img`
  width: 1.5625rem;
  height: 1.4375rem;
`;

const UserName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const WearingItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  flex: 1 0 0;

  padding: 1rem;
  gap: 1rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

const WearingItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 10.4375rem;
  height: 12.3125rem;
  gap: 1.5rem;

  border: 1px solid ${COLORS['gray-4']};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const WearingImage = styled.img`
  width: 8.0625rem;
  height: 7.8125rem;
`;

const WearingTag = styled.div<{ $backgroundColor: string, $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-shrink: 0;

  height: 1.75rem;
  background-color: ${(props) => props.$backgroundColor};

  font-size: 1.25rem;
  font-weight: 600;
`;

const Emoticon = styled.div`
gap: 1rem;
`;

export {
  Wrapper,
  Content,
  LeftWrapper,
  Character,
  MyCharacter,
  CharacterImage,
  User,
  UserIcon,
  UserName,
  WearingItems,
  WearingItem,
  WearingImage,
  WearingTag,
  Emoticon
};