import { Info, CopyRight, Pdf } from '@/styles/main/Info';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WakttuInfo = () => {
  const router = useRouter();
  return (
    <Info>
      <>
        <CopyRight>© copyright WAKTTU.</CopyRight>
        <CopyRight>
          왁뚜는 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
        </CopyRight>

        <Pdf onClick={() => router.push('/Pdf')}>개인정보처리방침</Pdf>
      </>
    </Info>
  );
};

export default WakttuInfo;
