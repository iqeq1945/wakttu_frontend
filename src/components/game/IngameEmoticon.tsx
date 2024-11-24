import { getEmoticonURL } from '@/services/api';
import { ImoticonImage } from '@/styles/game/Imoticon';

const IngameEmoticon = ({ src }: { src: string }) => {
  return <ImoticonImage src={getEmoticonURL(src)} alt="Emoticon" />;
};

export default IngameEmoticon;
