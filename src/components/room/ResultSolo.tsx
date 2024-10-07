import { getR2URL } from '@/services/api';
import {
  CBody,
  CModal,
  Container,
  CResult,
  CTitle,
  ResultTitle,
  Card,
  Character,
  CPlayer,
  Name,
  NameTag,
  Rank,
  RankList,
  Score,
  Trophy,
  RestList,
  RestItem,
  RestText,
  CFooter,
  CLevel,
  CLevelIcon,
  NowLevel,
  Exp,
  ExpBar,
  Gauge,
  Grade,
  Stat,
  StatText,
  Item,
  Confirm,
} from '@/styles/room/ResultSolo';

interface Props {
  list: Result[];
  offModal: () => void;
}

interface Result {
  rank: number;
  name: string;
  userId: string;
  score: number;
  team?: string;
  teamGame?: boolean;
}

const ResultSolo = ({ list, offModal }: Props) => {
  return (
    <Container>
      <CModal>
        <CTitle>
          <Trophy src="/assets/icons/trophy.svg" />
          <ResultTitle>게임 결과</ResultTitle>
        </CTitle>
        <CBody>
          <CResult>
            <RankList>
              <CPlayer>
                <Card rank={2}>
                  <Character src={getR2URL('/assets/items/S-4.svg')} />
                  <NameTag>
                    <Grade src="/assets/icons/ameba.svg" />
                    <Name>우왁굳</Name>
                  </NameTag>
                  <Score rank={2}>1000</Score>
                  <Rank rank={2}>2등</Rank>
                </Card>
              </CPlayer>
              <CPlayer>
                <Card rank={1}>
                  <Character src={getR2URL('/assets/items/S-5.svg')} />

                  <NameTag>
                    <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                    <Name>주르르</Name>
                  </NameTag>
                  <Score rank={1}>1000</Score>
                  <Rank rank={1}>1등</Rank>
                </Card>
              </CPlayer>
              <CPlayer>
                <Card rank={3}>
                  <Character src={getR2URL('/assets/items/S-5.svg')} />

                  <NameTag>
                    <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                    <Name>고세구</Name>
                  </NameTag>
                  <Score rank={3}>1000</Score>
                  <Rank rank={3}>3등</Rank>
                </Card>
              </CPlayer>
            </RankList>
            <RestList>
              <RestItem>
                <RestText>4등</RestText>
                <NameTag>
                  <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                  <Name>고세구</Name>
                </NameTag>
              </RestItem>
              <RestItem>
                <RestText>4등</RestText>
                <NameTag>
                  <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                  <Name>고세구</Name>
                </NameTag>
              </RestItem>
              <RestItem>
                <RestText>4등</RestText>
                <NameTag>
                  <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                  <Name>고세구</Name>
                </NameTag>
              </RestItem>
              <RestItem>
                <RestText>4등</RestText>
                <NameTag>
                  <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                  <Name>고세구</Name>
                </NameTag>
              </RestItem>
              <RestItem>
                <RestText>4등</RestText>
                <NameTag>
                  <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
                  <Name>고세구</Name>
                </NameTag>
              </RestItem>
            </RestList>
          </CResult>
          <CFooter>
            <CLevel>
              <CLevelIcon>
                <NowLevel>
                  <Grade src={getR2URL('/assets/icons/wakmoosae.svg')} />
                  <Exp>+5000xp</Exp>
                </NowLevel>
                <Grade src={getR2URL('/assets/icons/chimpange.svg')} />
              </CLevelIcon>
              <ExpBar>
                <Gauge exp={72} />
              </ExpBar>
              <Stat>
                <Item>
                  <StatText $color={true}>레벨</StatText>
                  <StatText $color={false}>99</StatText>
                </Item>
                <Item>
                  <StatText $color={true}>경험치</StatText>
                  <StatText $color={false}>750/1000</StatText>
                </Item>
              </Stat>
            </CLevel>
            <Confirm onClick={offModal}>확인 끝!</Confirm>
          </CFooter>
        </CBody>
      </CModal>
    </Container>
  );
};

export default ResultSolo;
