import { getUserDesc } from '@/modules/UserInfo';
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
  GaugeBar,
} from '@/styles/roomList/PlayerInfo';

const PlayerInfo = ({ user }: any) => {
  const { icon, level, exp } = getUserDesc(user.score, user.provider);

  return (
    <CPlayerInfo>
      <PlayerProfile src="/assets/player-profile.png" />
      <Info>
        <WrapPlayerName>
          <PlayerIcon src={icon} />
          <PlayerName>{user.name}</PlayerName>
        </WrapPlayerName>
        <Level>
          <LevelBar>
            <GaugeBar $exp={exp / 10} />
          </LevelBar>
          <LevelInfo>
            <WrapText>
              <LevelText $variant="title">레벨</LevelText>
              <LevelText>{level}</LevelText>
            </WrapText>
            <WrapText>
              <LevelText $variant="title">경험치</LevelText>
              <LevelText>{exp}/1000</LevelText>
            </WrapText>
          </LevelInfo>
        </Level>
        {/*<WrapCoin>
          <Wallet src="/assets/icons/wallet.svg" />
          <Coin>999,999,999,999</Coin>
        </WrapCoin>*/}
      </Info>
    </CPlayerInfo>
  );
};

export default PlayerInfo;
