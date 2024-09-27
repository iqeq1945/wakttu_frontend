import MyEmoticonList from '@/containers/mypage/MyEmoticonList';
import {
  Emoticon,
  EmoticonBox,
} from '@/styles/mypage/Mystyles';



const MyEmoticon = () => {
  return (
    <Emoticon>
      <h4>이모티콘</h4>
      <EmoticonBox>
        <MyEmoticonList />
      </EmoticonBox>
    </Emoticon>
  )
}

export default MyEmoticon;