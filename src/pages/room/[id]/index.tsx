import { Tab } from '@/components';
import roomList from '@/styles/modules/roomList/roomList.module.css';

const Room = () => {
  return (
    <div className={roomList.container}>
      <div className={roomList.contentWrapper}>
        <section className={roomList.infoSection}>
          <article className={roomList.roomInfo}>
            <div className={roomList.roomName}>방 이름</div>
            <div className={roomList.gameImage}>게임 종류 이미지</div>
            <div className={roomList.gameOptions}>옵션 정보 및 인원 정보</div>
          </article>
          <article className={roomList.startReady}>
            <div className={roomList.buttonWrapper}>
              <button className={roomList.startButton}>시작/준비</button>
            </div>
          </article>
        </section>
        <section className={roomList.roomListSection}>
          <section className={roomList.roomListTop}>
            <ul className={roomList.menuGroup}>
              <Tab href="/roomlist" menuName="나가기" />
              <Tab href="/room" menuName="마이페이지" />
              <Tab href="/room" menuName="사전" />
              <Tab href="/room" menuName="옵션" />
            </ul>
            <article className={roomList.userList}>
              <div className={roomList.userWrapper}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className={roomList.user}>
                    유저 {index + 1}
                  </div>
                ))}
              </div>
            </article>
          </section>
          <article className={roomList.lobbyChat}>채팅창</article>
        </section>
      </div>
    </div>
  );
};

export default Room;
