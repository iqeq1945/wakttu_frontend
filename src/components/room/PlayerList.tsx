import { CPlayerList } from "@/styles/room/PlayerList";
import { Player } from "@/components";

const PlayerList = () => {
  return (
    <CPlayerList>
      <Player ready={true} />
    </CPlayerList>
  );
};

export default PlayerList;
