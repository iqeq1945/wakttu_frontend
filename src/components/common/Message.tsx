import styled from 'styled-components';
import { COLORS } from '@/styles/theme';

interface Props {
  message: string;
  error?: boolean;
}
const Message = ({ message, error }: Props) => {
  return <CMessage $error={error ? true : false}>{message}</CMessage>;
};

const CMessage = styled.span<{ $error: boolean }>`
  color: ${({ $error }) => {
    return $error ? '#FF6565;' : `${COLORS.primary}`;
  }};

  font-family: 'WantedSans-Medium';
`;

export default Message;
