import styled from "styled-components";
import { COLORS } from "../theme";

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

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS["gray-4"]};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 5px ${COLORS["gray-3"]};
    border-radius: 4px;
    border-left: 1.5px solid transparent;
    border-right: 1.5px solid transparent;
  }
`;

export { CList };
