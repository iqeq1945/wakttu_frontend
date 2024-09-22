import { getIcon } from "@/modules/UserInfo";
import { getR2URL } from "@/services/api";
import { Copyright } from '@/styles/roomList/RoomList';
import { Character, CharacterImage, Content, Emoticon, LeftWrapper, MyCharacter, User, UserIcon, UserName, WearingImage, WearingItem, WearingItems, WearingTag } from "@/styles/mypage/Mystyles";
import { CosmeticStyles } from "@/styles/book/CosmeticType";


const Mystyle = ({ user }: any) => {
  // const icon = getIcon(user.score, user.provider);

  return (
    <LeftWrapper>
      <h3>플레이어의 마이페이지</h3>
      <Content>
        <h4># 캐릭터</h4>
        <Character>
          <MyCharacter>
            {/* <CharacterImage src={getR2URL('/assets/player-profile.png')} /> */}
            <CharacterImage src="/assets/playerProfile.png" />
            <User>
              {/* <UserIcon src={icon} /> */}
              <UserIcon src="/assets/game/union.svg" />
              {/* <UserName>{user.name}</UserName> */}
              <UserName>플레이어</UserName>
            </User>
          </MyCharacter>

          <WearingItems>
            {Object.entries(CosmeticStyles)
              .filter(([key]) => key !== 'all')
              .map(([key, value]) => (
                <WearingItem key={key}>
                  <WearingImage src="/assets/playerProfile.png" />
                  <WearingTag
                    $backgroundColor={value.backgroundColor}
                    $color={value.color}>
                    {value.name}
                  </WearingTag>
                </WearingItem>
              ))
            }


          </WearingItems>
        </Character>
        <h4># 이모티콘</h4>
        <Emoticon>
        </Emoticon>
      </Content>
      <Copyright>
        © copyright WAKTTU.
        <br />
        왁뚜는 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
      </Copyright>
    </LeftWrapper>
  )
};

export default Mystyle;