import styled from 'styled-components';

const CharacterImage = styled.div`
  position: relative;
  width: 11.25rem;
  height: 9.125rem;
`;

const SkinItem = styled.img<{ item: string }>`
  position: absolute;
  bottom: 0;
  width: 11.25rem;
  height: ${({ item }) => {
    switch (item) {
      case 'S-6': {
        return '9.125rem';
      }
      case 'S-4': {
        return '7.4125rem';
      }
      default: {
        return '7.8125rem';
      }
    }
  }};
  opacity: ${({ item }) => (item ? 1 : 0)};
`;

const HeadItem = styled.img<{ item: string }>`
  position: absolute;
  z-index: 3;
  width: 11.25rem;
  height: 7.1875rem;
  bottom: 0;

  opacity: ${({ item }) => (item ? 1 : 0)};
`;
const HandItem = styled.img<{ item: string }>`
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 11.25rem;
  height: 7.8125rem;

  opacity: ${({ item }) => (item ? 1 : 0)};
`;

const EyeItem = styled.img<{ item: string }>`
  position: absolute;
  bottom: 0;
  z-index: 5;
  margin-bottom: ${({ item }) => {
    switch (item) {
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

  opacity: ${({ item }) => (item ? 1 : 0)};
`;

export { CharacterImage, SkinItem, HeadItem, HandItem, EyeItem };
