import { getIcon } from '@/modules/UserInfo';
import { getR2URL } from '@/services/api';
import {
  CBody,
  CFooter,
  Character,
  CLevel,
  CLevelIcon,
  CModal,
  Confirm,
  Container,
  CPlayer,
  CResult,
  CTitle,
  Exp,
  ExpBar,
  Gauge,
  Grade,
  Item,
  Name,
  NameTag,
  NowLevel,
  Rank,
  ResultTitle,
  Stat,
  StatText,
  TeamList,
  TeamName,
  TeamResult,
  TeamTag,
  Trophy,
  WinTeam,
  WinTeamList,
  WinTeamName,
} from '@/styles/room/ResultTeam';

interface Props {
  user: any;
  list: Result[];
  offModal: () => void;
}

interface Result {
  rank: number;
  name: string;
  userId: string;
  score: number;
  provider?: string;
  exp: number;
  team?: string;
}

const ResultTeam = ({ list, offModal, user }: Props) => {
  return (
    <Container>
      <CModal>
        <CTitle>
          <Trophy src="/assets/icons/trophy.svg" />
          <ResultTitle>게임 결과</ResultTitle>
        </CTitle>
        <CBody>
          <CResult>
            <WinTeam team={'woo'}>
              <WinTeamName>우왁굳 팀</WinTeamName>
              <WinTeamList>
                <CPlayer>
                  <Character src={getR2URL('/assets/items/S-3.svg')} />
                  <NameTag>
                    <Name>왁굳형</Name>
                  </NameTag>
                </CPlayer>
                <CPlayer>
                  <Character src={getR2URL('/assets/items/S-3.svg')} />
                  <NameTag>
                    <Name>왁굳형</Name>
                  </NameTag>
                </CPlayer>
                <CPlayer>
                  <Character src={getR2URL('/assets/items/S-3.svg')} />
                  <NameTag>
                    <Name>왁굳형</Name>
                  </NameTag>
                </CPlayer>
                <CPlayer>
                  <Character src={getR2URL('/assets/items/S-3.svg')} />
                  <NameTag>
                    <Name>왁굳형</Name>
                  </NameTag>
                </CPlayer>
              </WinTeamList>
            </WinTeam>
            <TeamList>
              <TeamTag team={'gomem'}>
                <TeamResult>
                  <Rank>2등 </Rank>
                  <TeamName>고멤 팀</TeamName>
                </TeamResult>
              </TeamTag>
              <TeamTag team={'isedol'}>
                <TeamResult>
                  <Rank>3등 </Rank>
                  <TeamName>이세돌 팀</TeamName>
                </TeamResult>
              </TeamTag>
              <TeamTag team={'academy'}>
                <TeamResult>
                  <Rank>4등 </Rank>
                  <TeamName>아카데미 팀</TeamName>
                </TeamResult>
              </TeamTag>
            </TeamList>
          </CResult>
          <CFooter>
            <CLevel>
              <CLevelIcon>
                <NowLevel>
                  <Grade src={getIcon(user.score, user.provider)} />
                  <Exp>
                    +{list.find((item) => item.userId === user.id)!.score}xp
                  </Exp>
                </NowLevel>
                <Grade src={getIcon(user.score + 1000, user.provider)} />
              </CLevelIcon>
              <ExpBar>
                <Gauge exp={(user.score % 1000) / 10} />
              </ExpBar>
              <Stat>
                <Item>
                  <StatText $color={true}>레벨</StatText>
                  <StatText $color={false}>
                    {Math.floor(user.score / 1000)}
                  </StatText>
                </Item>
                <Item>
                  <StatText $color={true}>경험치</StatText>
                  <StatText $color={false}>{user.score % 1000}/1000</StatText>
                </Item>
              </Stat>
            </CLevel>
            <Confirm onClick={offModal}>확인</Confirm>
          </CFooter>
        </CBody>
      </CModal>
    </Container>
  );
};

export default ResultTeam;
