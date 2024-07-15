import { CPlayerList, WrapPlayerList } from "@/styles/room/PlayerList";
import { Player } from "@/components";

const PlayerList = () => {
  return (
    <CPlayerList>
      <WrapPlayerList>
        <Player $ready={true} />
        <Player $ready={true} />
        <Player $ready={true} />
        <Player $ready={false} />
        <Player $ready={false} />
        <Player $ready={false} />
        <Player $ready={false} />
        <Player $ready={false} />
      </WrapPlayerList>
    </CPlayerList>
  );
};

export default PlayerList;
