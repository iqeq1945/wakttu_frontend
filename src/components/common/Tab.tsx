import { MouseEvent } from 'react';
import { Content } from '@/styles/common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal, selectModal } from '@/redux/modal/modalSlice';
import Mypage from '../mypage/Mypage';

interface Props {
  menuName: string;
  href: string;
}

const Tab = ({ menuName, href }: Props) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (menuName === '마이 페이지') {
      if (!modal.open) {
        dispatch(openModal('Mypage'));
      } else {
        dispatch(closeModal());
      }
    }
  };

  return (
    <Content href={href} onClick={handleClick}>
      <li>{menuName}</li>
      {menuName === '마이 페이지' && modal.open && <Mypage />}
    </Content>
  );
};

export default Tab;
