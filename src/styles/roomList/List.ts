import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../theme";

const CList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 62rem;
  height: 31.875rem;
  padding: 2rem;

  background: ${COLORS.bg};
  border-radius: 1rem;
  border: 2px solid ${COLORS["gray-4"]};
`;

const CItem = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.75rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28.125rem;
  height: 6.25rem;
  padding: 1.5rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS["gray-4"]};
  background: ${COLORS.bg};

  &:hover,
  :focus {
    border: 1px solid ${COLORS.primary};
  }
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const RoomNameCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const RoomName = styled.h5`
  color: ${COLORS.text};

  font-family: "WantedSans-SemiBold";
`;

const RoomCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const RoomGame = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const SemiText = styled.span<{ $color?: boolean }>`
  color: ${({ $color }) => ($color ? COLORS["gray-3"] : COLORS.text)};

  font-family: "WantedSans-SemiBold";
  font-size: ${FONT_SIZES["subtitle-1"]};
`;

const MediumText = styled.span<{ $color?: boolean }>`
  color: ${({ $color }) => ($color ? COLORS["gray-3"] : COLORS.text)};

  font-family: "WantedSans-Medium";
  font-size: ${FONT_SIZES["body-2"]};
`;

const Status = styled.div<{ $status?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.375rem 0.625rem;

  color: ${COLORS["gray-3"]};
`;

export {
  CList,
  CItem,
  Item,
  Summary,
  RoomInfo,
  RoomNameCount,
  RoomName,
  RoomCount,
  RoomGame,
  SemiText,
  MediumText,
};
