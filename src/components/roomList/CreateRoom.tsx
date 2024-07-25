import {
  CCreate,
  CCreateRoom,
  CInput,
  CLabel,
  CreateIcon,
  CreateLabel,
  LabelWithIcon,
  Selected,
  Dropdown,
  DropdownItem,
  DropdownLine,
  CheckBox,
  CheckIcon,
} from '@/styles/roomList/CreateRoom';

const CreateRoom = () => {
  return (
    <CCreateRoom>
      <LabelWithIcon>
        <CreateIcon src="/assets/plus-green.svg" />
        <CreateLabel>방 만들기</CreateLabel>
      </LabelWithIcon>
      <CCreate>
        <CLabel>방 제목</CLabel>
        <CInput name="title" />
      </CCreate>
      <CCreate>
        <CLabel>비밀번호</CLabel>
        <CInput name="password" type="password" />
      </CCreate>
      <CCreate>
        <CLabel>플레이어 수</CLabel>
        <CInput name="total" type="number" />
      </CCreate>
      <CCreate>
        <CLabel>게임 유형</CLabel>
        <Dropdown>
          <Selected>끝말잇기</Selected>
          <DropdownLine src="/assets/down-line.svg" />
          <DropdownItem>끝말잇기</DropdownItem>
          <DropdownItem>쿵쿵따</DropdownItem>
        </Dropdown>
      </CCreate>
      <CCreate>
        <CLabel>라운드 수</CLabel>
        <CInput name="round" type="number" />
      </CCreate>
      <CCreate>
        <CLabel>라운드시간</CLabel>
        <Dropdown>
          <Selected>30초</Selected>
          <DropdownLine src="/assets/down-line.svg" />
          <DropdownItem>30초</DropdownItem>
          <DropdownItem>60초</DropdownItem>
          <DropdownItem>90초</DropdownItem>
          <DropdownItem>120초</DropdownItem>
        </Dropdown>
      </CCreate>
      <CCreate>
        <CLabel>특수규칙</CLabel>
        <CheckBox>
          <CheckIcon type="checkbox" id="manner" name="option" />
          <label htmlFor="manner">
            <Selected>매너</Selected>
          </label>
        </CheckBox>
        <CheckBox>
          <CheckIcon type="checkbox" id="out" name="option" />
          <label htmlFor="out">
            <Selected>외수</Selected>
          </label>
        </CheckBox>
      </CCreate>
    </CCreateRoom>
  );
};

export default CreateRoom;
