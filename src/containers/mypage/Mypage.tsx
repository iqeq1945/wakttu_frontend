import { MyStyle, MyStyleList } from '@/components';
import { selectUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';
import { CosmeticVariant } from '@/styles/book/CosmeticType';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const user = useSelector(selectUserInfo);
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<
    {
      id: string;
      category: CosmeticVariant;
      name: string;
      description: string;
      url: string;
      author: string;
    }[]
  >();

  const getItem = useCallback(async () => {
    const { data } = await client.get('/user/items/' + user.id);
    setItems(data);
    console.log(data);
  }, [user.id]);

  useEffect(() => {
    getItem();
    setLoading(false);
  }, [getItem]);

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <>
          <MyStyle user={user} />
          <MyStyleList items={items} />
        </>
      )}
    </>
  );
};

export default MyPage;
