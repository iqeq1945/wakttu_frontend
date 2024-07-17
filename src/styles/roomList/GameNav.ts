import styled from "styled-components";
import { COLORS, FONT_SIZES } from "@/styles/theme";

const CGameNav = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;

  width: 62rem;

  padding: 0rem 0.25rem;
  background: ${COLORS.bg};
`;

const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CreateRoomBtn = styled.button`
  display: flex;
  align-items: center;

  gap: 0.625rem;
  padding: 0.5rem;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
  background: ${COLORS.primary};
`;

const PlusTitle = styled.span`
  color: ${COLORS.bg};

  font-family: "WantedSans-SemiBold";
  font-size: ${FONT_SIZES["subtitle-2"]};
`;

const Plus = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const SearchBtn = styled.img`
  display: flex;
  align-items: center;

  width: 1.2rem;
  height: 1.2rem;
  gap: 0.625rem;
  padding: 0.5rem;

  cursor: pointer;
`;

const RefreshBtn = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;
`;

const FilterToggled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.625rem;
  padding: 0.5rem;

  border: none;
  background: ${COLORS.bg};

  cursor: pointer;
`;

const FilterIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

export {
  CGameNav,
  LeftIcons,
  CreateRoomBtn,
  Plus,
  PlusTitle,
  SearchBtn,
  RefreshBtn,
  FilterToggled,
  FilterIcon,
};
