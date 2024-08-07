import styled, { css } from "styled-components";
import { COLORS } from "@/styles/theme";

export type ItemVariant = 'skin' | 'head' | 'hand' | 'eye'
export type InfoVariant = 'title' | 'content';

const itemStyles = {
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


const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21rem;
  height: 3.5rem;
  padding: 0 0.625rem;
  gap: 0.5rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
  box-sizing: border-box;

  font-size: 20px;
  font-weight: 600;
  color: ${COLORS.text};
`;

const Itemtag = styled.div<{ $itemType?: ItemVariant }>`
  padding: 0.25rem 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid ${COLORS['gray-4']};
  
  font-size: 14px;

  ${({ $itemType }) => {
    const styles = itemStyles[$itemType || 'skin'];
    return css`
      background-color: ${styles.backgroundColor};
      color: ${styles.color};
    `;
  }}
`;


const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 33.9375rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};

  overflow: hidden;

  &::before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;

    background-image: url('/assets/mypage-background.png');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
  }
`;

const Background = styled.div<{ $itemType?: ItemVariant }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  z-index: -1;
  
  ${({ $itemType }) => {
    const styles = itemStyles[$itemType || 'skin'];
    return css`
      background-color: ${styles.backgroundColor};
      background: linear-gradient(180deg, ${styles.backgroundColor}, white);
    `;
  }}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21rem;
  height: 21rem;
`;

const ItemImage = styled.img`
  width: 13.5rem;
  height: 13.5rem;
  object-fit: contain;
  z-index: 2;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 1rem;
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

const GetButton = styled.div<{ $itemType?: ItemVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.3125rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS["gray-4"]};
  cursor: pointer;

  font-size: 1.5rem;
  font-weight: 600;

  ${({ $itemType }) => {
    const styles = itemStyles[$itemType || 'skin'];
    return css`
      background-color: ${styles.backgroundColor};
      color: ${styles.color};
    `;
  }}
`;

export {
  TitleContainer,
  Itemtag,
  ItemContainer,
  Background,
  ImageContainer,
  ItemImage,
  ItemInfo,
  Wrap,
  Info,
  GetButton
}