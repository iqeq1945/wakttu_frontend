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
        <SkinItem skin={'S-3'} src={'/s-3.svg'} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-3'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-3'} src={getR2URL('/assets/items/S-3.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-3'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-4'} src={getR2URL('/assets/items/S-4.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-4'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-5'} src={getR2URL('/assets/items/S-5.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-5'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-6'} src={getR2URL('/assets/items/S-6.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />

        <EyeItem skin={'S-6'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-7'} src={getR2URL('/assets/items/S-7.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-7'} src={character.eye} />
      </CharacterImage>
      <CharacterImage>
        <SkinItem skin={'S-8'} src={getR2URL('/assets/items/S-8.svg')} />
        <HeadItem src={character.head} />
        <HandItem src={'/jururu.svg'} />
        <EyeItem skin={'S-8'} src={character.eye} />
      </CharacterImage>
    </>
  );
};

export default Character;
