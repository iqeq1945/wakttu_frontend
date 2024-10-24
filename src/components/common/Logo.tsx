import { getR2URL } from '@/services/api';
import { LogoLG } from '@/styles/common/Logo';

interface Props {
  size: 'sm' | 'md' | 'lg';
  type: 'logomark' | 'logotype';
}

const Logo = ({ size, type }: Props) => {
  if (type == 'logotype') {
    return <LogoLG src={getR2URL('/assets/icons/logo.svg')} />;
  }

  return <LogoLG src={getR2URL('/assets/icons/logo.svg')} />;
};

export default Logo;
