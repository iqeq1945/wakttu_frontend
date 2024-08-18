import {
  CName,
  CPlayer,
  CPlayerList,
  Host,
  Name,
  Score,
  Skin,
} from '@/styles/last/PlayList';

const PlayList = () => {
  return (
    <CPlayerList>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Host>
            <span>방장</span>
          </Host>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer $turn={true}>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
      <CPlayer>
        <Skin src="/assets/drom.svg" />
        <CName>
          <Name>이파리는참지않아</Name>
        </CName>
        <Score>12345</Score>
      </CPlayer>
    </CPlayerList>
  );
};

export default PlayList;
