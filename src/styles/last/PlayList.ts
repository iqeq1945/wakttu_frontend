import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const DROM_SHADOW = '0px 1px 10px 0px rgba(0, 0, 0, 0.15)';

export const CPlayerList = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  background: linear-gradient(180deg, #c0b0ff 0%, #92aaff 100%);
`;

export const CPlayer = styled.div<{ $turn?: boolean, $fail?: boolean }>`
  display: flex;
  width: 13rem;
  height: 15rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;

  border-radius: 0.75rem;
  box-shadow: ${DROM_SHADOW};

  transition: transform 0.2s linear;

  ${({ $turn, $fail }) => {
    if ($fail) {
      return `border: 4px solid #FF7070; background: #FFE6E6; transform : translate(0 , -0.8rem);`
    } else if ($turn) {
      return `border: 4px solid #A377FF; background: #E6DAFF; transform : translate(0 , -0.8rem);`
    } else {
      return `background: linear-gradient(180deg, #fff 0%, #f2f2f2 100%);`;
    }

  }}
`;

export const Skin = styled.img`
  height: 7.8125rem;
  flex-shrink: 0;
`;

export const CName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4375rem;
`;

export const Name = styled.h5`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const Score = styled.h3`
  color: ${COLORS.pupple};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const Host = styled.div`
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 1.875rem;
  background: ${COLORS.pupple};

  & > span {
    color: ${COLORS.bg};
    text-align: center;

    font-family: 'WantedSans-SemiBold';
    font-size: ${FONT_SIZES['subtitle-1']};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
