import { getEmoticonURL } from '@/services/api';
import { ImoticonImage } from '@/styles/game/Imoticon';
import { useEffect } from 'react';

interface Props {
  key: any;
  src: string;
}
const IngameEmoticon = ({ key, src }: Props) => {
  return <ImoticonImage src={getEmoticonURL(src)} alt="Emoticon" />;
};

export default IngameEmoticon;
