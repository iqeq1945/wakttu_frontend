
import { getR2URL } from '@/services/api';
import { Header, Buttons, SaveButton, ResetButton, ButtonIcon } from '@/styles/mypage/MypageHeader';

const MypageHeader = () => {
  return (
    <Header>
      <h3>마이페이지</h3>
      <Buttons>
        <SaveButton>
          <ButtonIcon src={getR2URL('/assets/game/save.svg')} />
          저장하기
        </SaveButton>
        <ResetButton>
          <ButtonIcon src={getR2URL('/assets/game/refresh.svg')} />
          되돌리기
        </ResetButton>
      </Buttons>
    </Header>
  )
}

export default MypageHeader;