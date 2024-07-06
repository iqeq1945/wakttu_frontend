import {
  CPlayerInfo,
  PlayerProfile,
  Info,
  WrapPlayerName,
  PlayerIcon,
  PlayerName,
  Level,
  LevelBar,
  LevelInfo,
  WrapText,
  LevelText,
  WrapCoin,
  Wallet,
  Coin,
} from '@/styles/roomList/PlayerInfo';

const PlayerInfo = () => {
  return (
    <CPlayerInfo>
      <PlayerProfile src="/assets/player-profile.png" />
      <Info>
        <WrapPlayerName>
          <PlayerIcon src="/assets/amoeba.svg" />
          <PlayerName>플레이어</PlayerName>
        </WrapPlayerName>
        <Level>
          <LevelBar src="/assets/lvl-bar.svg" />
          <LevelInfo>
            <WrapText>
              <LevelText $variant="title">레벨</LevelText>
              <LevelText>0</LevelText>
            </WrapText>
            <WrapText>
              <LevelText $variant="title">경험치</LevelText>
              <LevelText>50/100</LevelText>
            </WrapText>
          </LevelInfo>
        </Level>
        <WrapCoin>
          <Wallet src="/assets/wallet.svg" />
          <Coin>999,999,999,999</Coin>
        </WrapCoin>
      </Info>
    </CPlayerInfo>
  );
};

export default PlayerInfo;
