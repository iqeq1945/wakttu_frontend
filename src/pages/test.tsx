import { setAchieve } from '@/redux/achieve/achieveSlice';
import { useDispatch } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const click = async () => {
    dispatch(
      setAchieve([
        {
          id: '',
          name: '아녕',
          desc: '안녕클레오파트라',
          img: 'flflfl',
          regDate: 111111122,
          statId: 'LAST',
          targetStatVal: 10,
        },
        {
          id: '',
          name: '룩삼',
          desc: '안녕클레오파트라',
          img: 'flflfl',
          regDate: 111111122,
          statId: 'LAST',
          targetStatVal: 10,
        },
      ])
    );
  };

  return <div onClick={click}>hihi</div>;
};

export default Test;
