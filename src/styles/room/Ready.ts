import { COLORS } from "@/styles/theme";
import styled from "styled-components";

const CReady = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25rem;
  padding: 3rem 2rem;

  border-radius: 1rem;
  border: 0.125rem solid ${COLORS["gray-4"]};
  background: ${COLORS.bg};
`;

const ReadyButton = styled.h4`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 1rem;
  border: none;
  background: ${COLORS.primary};

  color: ${COLORS.bg};
  text-align: center;

  font-family: "WantedSans-SemiBold";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export { CReady, ReadyButton };
