import styled, { css } from "styled-components";
import { COLORS } from "@/styles/theme";

export type CosmeticVariant = 'skin' | 'head' | 'hand' | 'eye';
export type InfoVariant = 'title' | 'content';

const Styles = {
  skin: {
    backgroundColor: '#B6ECC5',
    color: '#155126'
  },
  head: {
    backgroundColor: '#85E2FF',
    color: '#004E66'
  },
  hand: {
    backgroundColor: '#FFF6A2',
    color: '#665C00'
  },
  eye: {
    backgroundColor: '#FFA2A2',
    color: '#660000'
  }
};

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.5rem;
  padding: 1rem 0.625rem;
  gap: 0.5rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
  box-sizing: border-box;
`;

const Tag = styled.div<{ $itemType?: CosmeticVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: 600;

  ${({ $itemType }) => {
    const style = Styles[$itemType || 'skin'];
    return css`
      background-color: ${style.backgroundColor};
      color: ${style.color};
    `;
  }}
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.text};
  line-height: normal;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
  overflow: hidden;
`;

const InfoTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 21rem;

  &::before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url('/assets/mypage-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
  }
`;

const Background = styled.div<{ $itemType?: CosmeticVariant }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
  
  ${({ $itemType }) => {
    const style = Styles[$itemType || 'skin'];
    return css`
      background-color: ${style.backgroundColor};
      background: linear-gradient(180deg, ${style.backgroundColor}, white);
    `;
  }}
`;

const CosmeticImage = styled.img`
  position: absolute;

  width: 13.5rem;
  height: 13.5rem;
  object-fit: fill;
  z-index: 2;
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 21rem;
  gap: 0.5rem;
  padding: 1.5rem;
`;


const Wrap = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  gap: 1rem;
`;

const Info = styled.li<{ $variant?: InfoVariant }>`
  display: flex;
  justify-content: start;
  align-items: flex-start;

  ${({ $variant }) => {
    switch ($variant) {
      case "title":
        return css`
          flex-shrink: 0;
          min-width: 6rem;

          color: ${COLORS["gray-2"]};
          font-weight: 500;
        `;

      case "content":
        return css`
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;

          font-weight: 600;
          color: ${COLORS.text};
        `;
    }
  }}
`;

const GetButton = styled.div<{ $itemType?: CosmeticVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  width: 100%;
  height: 4.3125rem;

  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.10);
  cursor: pointer;

  font-size: 1.5rem;
  font-weight: 600;

  ${({ $itemType }) => {
    const style = Styles[$itemType || 'skin'];
    return css`
      background-color: ${style.backgroundColor};
      color: ${style.color};
    `;
  }}
`;

export {
  TitleSection,
  Tag,
  Title,
  InfoSection,
  InfoTop,
  Background,
  CosmeticImage,
  InfoBottom,
  Wrap,
  Info,
  GetButton
}