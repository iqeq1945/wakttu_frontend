import styled, { css } from "styled-components";
import { COLORS } from "@/styles/theme";

type RelevantPerson = "woowakgood" | "ine" | "jingburger" | "lilpa" | "jururu" | "gosegu" | "viichan";
type RelevantPersonArray = RelevantPerson[];


const characterColors = {
  "woowakgood": {
    "backgroundColor": "#164532",
    "color": "#FFFFFF"
  },
  "ine": {
    "backgroundColor": "#8A2BE2",
    "color": "#FFFFFF"
  },
  "jingburger": {
    "backgroundColor": "#F0A957",
    "color": "#FFFFFF"
  },
  "lilpa": {
    "backgroundColor": "#2A265A",
    "color": "#FFFFFF"
  },
  "jururu": {
    "backgroundColor": "#FF008C",
    "color": "#FFFFFF"
  },
  "gosegu": {
    "backgroundColor": "#00A6FF",
    "color": "#FFFFFF"
  },
  "viichan": {
    "backgroundColor": "#95C100",
    "color": "#FFFFFF"
  }
}

const ListWrapper = styled.div`
  display: flex;
  width: 120rem;
  height: 67.5rem;
  padding: 1rem 23.75rem 3rem 23.75rem;
  flex-direction: column;
  align-items: center;
  gap: 1.125rem;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 64.5rem;
  padding: 2.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 1rem;
  background: var(--Bg, #FFF);

  /* Drom_shadow */
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const TopLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Title = styled.h3`
  color: #000;
  text-align: center;
`;


const LinkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const LinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
  transform: rotate(-90deg);
`;



/** Relevant */
const RelevantWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RelevantBackgroundColor = css<{ $RelevantPerson: RelevantPerson }>`
  ${({ $RelevantPerson }) => {
    return css`
      background-color: ${characterColors[$RelevantPerson].backgroundColor};
      color: #FFF;
    `;
  }}
`;

const RelevantBdage = styled.div<{ $RelevantPerson: RelevantPerson }>`
  display: flex;
  padding: 0.375rem 0.75rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;

  ${RelevantBackgroundColor};
`;

const RelevantText = styled.span`
  color: rgba(255, 255, 255, 0.90);
  text-align: center;

  /* Body-1 - 16px - Medium */
  font-family: "Wanted Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;




const Description = styled.h6`
  color: var(--Text, #282828);
`;

const TagWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 2.25rem;
  background: var(--Gray-4, #EAEAEA);
`;

const TagContent = styled.span`
  color: var(--Gray-2, #666);
  text-align: center;
`;



export {
  type RelevantPerson,
  type RelevantPersonArray,
  ListWrapper,
  Wrapper,
  TopWrapper,
  TopLeftWrapper,
  Title,
  RelevantWrapper,
  RelevantBdage,
  RelevantText,
  Description,
  TagWrapper,
  TagContent,
  LinkButton,
  LinkIcon
};
