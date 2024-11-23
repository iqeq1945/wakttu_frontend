import { getEmoticonURL } from '@/services/api';
import { ImoticonImage } from '@/styles/game/Imoticon';

const IngameImoticon = ({ src }: { src: string }) => {
  return <ImoticonImage src={getEmoticonURL(src)} alt="Imoticon" />;
};

export default IngameImoticon;
