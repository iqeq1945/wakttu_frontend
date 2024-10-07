import styled from "styled-components";

const CharacterImage = styled.div`
  position: relative;
  width: 160px;
  height: 125px;
`;

const SkinItem = styled.img`
  position: absolute;
  width: 160px;
  height: 125px;
`;

const HeadItem = styled.img`
  position: absolute;
  z-index: 3;
  width: 160px;
  height: 115 px;
`;
const HandItem = styled.img`
  position: absolute;
  z-index: 4;
  width: 160px;
  height: 125px;
`;

const EyeItem = styled.img`
  position: absolute;
  z-index: 5;
  margin-top: 50px;
  width: 160px;
  height: 40px;
`;


export {
  CharacterImage,
  SkinItem,
  HeadItem,
  HandItem,
  EyeItem,
}