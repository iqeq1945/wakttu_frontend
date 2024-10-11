import { getR2URL } from '@/services/api';
import {
  CharacterImage,
  EyeItem,
  HandItem,
  HeadItem,
  SkinItem,
} from '@/styles/common/CharacterItems';

const Character = (character: any) => {
  return (
    <>
      <CharacterImage>
        <SkinItem item={'S-3'} src={'/s-4.svg'} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-3'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-3'} src={getR2URL('/assets/items/S-3.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-3'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-4'} src={getR2URL('/assets/items/S-4.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-4'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-5'} src={getR2URL('/assets/items/S-5.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-5'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-6'} src={getR2URL('/assets/items/S-6.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-6'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-7'} src={getR2URL('/assets/items/S-7.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-7'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem item={'S-8'} src={getR2URL('/assets/items/S-8.svg')} />
        <HeadItem item={character.head} src={character.head} />
        <HandItem item={'/jururu.svg'} src={'/jururu.svg'} />
        <EyeItem item={'S-8'} src={character.eye} />
      </CharacterImage>
    </>
  );
};

export default Character;
