import { LogoLG } from "@/styles/common/Logo";

interface Props {
  size: "sm" | "md" | "lg";
  type: "logomark" | "logotype";
}

const Logo = ({ size, type }: Props) => {
  if (type == 'logotype') {
    return <LogoLG src="/assets/game/logotype.svg" />;
  }

  return <LogoLG src="/assets/game/logotype.svg" />;
};

export default Logo;