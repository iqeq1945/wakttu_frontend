import { CharacterImage, EyeItem, HandItem, HeadItem, SkinItem } from "@/styles/common/CharacterItems"


const Character = (character: any) => {
  return (
    <CharacterImage>
      <SkinItem src={character.skin} />
      <HeadItem src={character.head} />
      <HandItem src={character.hand} />
      <EyeItem src={character.eye} />
    </CharacterImage>
  )
}

export default Character;