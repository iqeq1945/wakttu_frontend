import Acheive from '@/components/common/Acheive';
import { selectAchieve } from '@/redux/achieve/achieveSlice';
import { useSelector } from 'react-redux';

const Achieves = () => {
  const achieves = useSelector(selectAchieve);
  return <Acheive achieves={achieves ? achieves : []} />;
};

export default Achieves;
