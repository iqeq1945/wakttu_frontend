import { REGEXP, ERROR_MESSAGE } from '@/constants/auth';

const onCheckId = (id: string, sameId: boolean) => {
  if (id === '') return ERROR_MESSAGE.requiredError('아이디');

  if (!REGEXP.userId.test(id)) return ERROR_MESSAGE.idRegexError;

  if (!sameId) return ERROR_MESSAGE.duplicateError('아이디');

  return '';
};

const onCheckPw = (pw: string) => {
  if (pw === '') return ERROR_MESSAGE.requiredError('비밀번호');

  if (!REGEXP.userPassword.test(pw)) return ERROR_MESSAGE.pwRegexError;

  return '';
};

const onCheckConfirmPw = (pw: string, confirmPw: string) => {
  if (confirmPw === '') return ERROR_MESSAGE.requiredError('비밀번호 확인');

  if (pw !== confirmPw) return ERROR_MESSAGE.confirmPwError;

  return '';
};

const onCheckNickname = (nickname: string, sameNickname: boolean) => {
  if (nickname === '') return ERROR_MESSAGE.requiredError('닉네임');

  if (!REGEXP.userNickname.test(nickname)) {
    return ERROR_MESSAGE.nicknameRegexError;
  }

  if (!sameNickname) return ERROR_MESSAGE.duplicateError('닉네임');

  return '';
};

interface Props {
  id: string;
  sameId: boolean;
  pw: string;
  confirmPw: string;
  nickname: string;
  sameNickname: boolean;
}

const onError = ({ id, sameId, pw, confirmPw, nickname, sameNickname }: Props) => {
  const errorId = onCheckId(id, sameId);
  const errorPw = onCheckPw(pw);
  const errorConfirmPw = onCheckConfirmPw(pw, confirmPw);
  const errorNickname = onCheckNickname(nickname, sameNickname);

  return { errorId, errorPw, errorConfirmPw, errorNickname };
};

export default onError;
