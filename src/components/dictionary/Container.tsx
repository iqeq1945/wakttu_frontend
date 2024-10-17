import { ContainerMain, ContainerBottom, ContainerTop, ContainerContent, ContainerSub } from '@/styles/dictionary/Container';

interface ContainerProps {
  type?: 'top' | 'bottom' | 'content' | 'main';
  children?: React.ReactNode;
}

/** 
 * 콘텐츠 컨테이너
 * @desc 사전 페이지의 개별 컨테이너 컴포넌트
 * 콘텐츠 사이즈가 달라 재사용 불가한 컴포넌트로 작성
 */
const Container: React.FC<ContainerProps> = ({ type='main', children }) => {
  const ContainerComponent = {
    top: ContainerTop,
    bottom: ContainerBottom,
    content: ContainerContent,
    main: ContainerMain,  // 기본값을 명확하게 표현
  }[type];

  return <ContainerComponent>{children}</ContainerComponent>;
};

export { Container };
