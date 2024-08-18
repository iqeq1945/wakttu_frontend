import {
  Button,
  ButtonText,
  CButton,
  CHeader,
  CTitle,
  ExitButton,
  ExitIcon,
  Index,
  Title,
} from '@/styles/last/Header';

const Header = () => {
  return (
    <CHeader>
      <CButton>
        <Button>
          <ButtonText>사전</ButtonText>
        </Button>
        <Button>
          <ButtonText>방설정</ButtonText>
        </Button>
        <Button>
          <ButtonText>도움말</ButtonText>
        </Button>
      </CButton>
      <CTitle>
        <Index>707070</Index>
        <Title>즐겁게 즐기자 왁뚜!</Title>
      </CTitle>
      <CButton>
        <ExitButton>
          <ButtonText>나가기</ButtonText>
          <ExitIcon src="/assets/icons/game-exit.svg" />
        </ExitButton>
      </CButton>
    </CHeader>
  );
};

export default Header;
