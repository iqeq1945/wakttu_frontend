import { CosmeticVariant } from '@/styles/book/CosmeticType';
import { MyStyleList as StyleList } from '@/components';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { client } from '@/services/api';

const MyStyleList = () => {
  const [isLoading, setLoading] = useState(false);
  const user = useSelector(selectUserInfo);
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
          <StyleList items={items} />
        </>
      )}
    </>
  );
};

export default MyStyleList;