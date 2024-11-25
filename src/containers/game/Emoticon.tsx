import { GEmoticon } from '@/components';
import { KeyboardEvent, useEffect, useState } from 'react';

interface Props {
  emoticon?: string;
}

const Emoticon = ({ emoticon }: Props) => {
  const [receivedEmoticon, setEmoticon] = useState<string>();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (emoticon) {
      setEmoticon(emoticon);
      setKey((prev) => prev + 1);
      setTimeout(() => setEmoticon(undefined), 2000);
    }
  }, [emoticon]);

  return (
    <>{receivedEmoticon && <GEmoticon key={key} src={receivedEmoticon} />}</>
  );
};

export default Emoticon;
