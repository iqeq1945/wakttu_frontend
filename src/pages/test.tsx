import { setAchieve } from '@/redux/achieve/achieveSlice';
import { useDispatch } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(
      setAchieve([
        {
          id: 'RANI',
          desc: '설명',
          name: 'hihi',
          img: '/badge.jpg',
          regDate: 0,
          statId: 'RANI-1',
          targetStatVal: 1,
        },
      ])
    );
  };

  return <div onClick={click}>hihi</div>;
};

export default Test;
