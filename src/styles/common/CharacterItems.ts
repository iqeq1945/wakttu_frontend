import styled from 'styled-components';

const CharacterImage = styled.div`
  position: relative;
  width: 11.25rem;
  height: 9.125rem;
`;

const SkinItem = styled.img<{ skin: string }>`
  position: absolute;
  bottom: 0;
  width: 11.25rem;
  height: ${({ skin }) => {
    switch (skin) {
      case 'S-6': {
        return '9.125rem';
      }
      default: {
        return '7.8125rem';
      }
    }
  }};
`;

const HeadItem = styled.img`
  position: absolute;
  z-index: 3;
  width: 11.25rem;
  height: 7.1875rem;
  bottom: 0;
`;
const HandItem = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 11.25rem;
  height: 7.1875rem;
`;

const EyeItem = styled.img<{ skin: string }>`
  position: absolute;
  bottom: 0;
  z-index: 5;
  margin-bottom: ${({ skin }) => {
    switch (skin) {
      case 'S-8': {
        return '3.13rem';
      }
      default: {
        return '2.19rem';
      }
    }
  }};
  width: 11.25rem;
  height: 2.5rem;
`;

export { CharacterImage, SkinItem, HeadItem, HandItem, EyeItem };
