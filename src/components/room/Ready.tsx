import { CReady, CTeam, ReadyButton, TeamButton } from '@/styles/room/Ready';

interface Props {
  ready: boolean;
  team?: boolean;
  onReady: () => void;
  onTeam: (team: string) => void;
  onStart?: () => void;
}
const Ready = ({ onReady, onStart, ready, team = false, onTeam }: Props) => {
  return (
    <CReady>
      {team ? (
        <>
          <CTeam>
            <TeamButton team={'woo'} onClick={() => onTeam('woo')}>
              우왁굳 팀
            </TeamButton>
            <TeamButton team={'gomem'} onClick={() => onTeam('gomem')}>
              고멤 팀
            </TeamButton>
          </CTeam>
          <CTeam>
            <TeamButton team={'academy'} onClick={() => onTeam('academy')}>
              아카데미 팀
            </TeamButton>
            <TeamButton team={'isedol'} onClick={() => onTeam('isedol')}>
              이세돌 팀
            </TeamButton>
          </CTeam>
        </>
      ) : (
        ''
      )}

      {onStart ? (
        <ReadyButton onClick={onStart}>시작</ReadyButton>
      ) : ready ? (
        <ReadyButton onClick={onReady}>준비 취소</ReadyButton>
      ) : (
        <ReadyButton onClick={onReady}>준비</ReadyButton>
      )}
    </CReady>
  );
};

export default Ready;
