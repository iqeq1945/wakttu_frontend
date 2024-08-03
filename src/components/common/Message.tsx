import styled from 'styled-components';

interface Props {
  message: string;
  error?: boolean;
}
const Message = ({ message, error }: Props) => {
  return <CMessage $error={error ? true : false}>{message}</CMessage>;
};

const CMessage = styled.span<{ $error: boolean }>`
  color: ${({ $error }) => {
    return $error ? '#FF6565;' : '#282828;';
  }}

  font-family: WantedSans-Medium;
  font-size: 0.625rem;
`;

export default Message;
