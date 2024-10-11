import { MyStyleList as StyleList } from '@/components';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo, setCharacter } from '@/redux/user/userSlice';
import { client, getMyItemList } from '@/services/api';
import { MouseEvent } from 'react';

type Variant = 'skin' | 'head' | 'hand' | 'eye';

const MyStyleList = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const user = useSelector(selectUserInfo);
  const [items, setItems] = useState<
    {
      id: string;
      category: Variant;
      name: string;
      description: string;
      url: string;
      author: string;
    }[]
  >();
  const [itemList, setItemList] = useState(items);

  const [clickTag, setClickTag] = useState<string>('all');
  const [clickItem, setClickItem] = useState<{
    skin: string;
    hand: string;
    head: string;
    eye: string;
  }>(user.character);

  const handleClickTag = (e: MouseEvent<HTMLElement>) => {
    const clicked = e.currentTarget.dataset.category;
    if (clicked) {
      setClickTag(clicked);
    }
  };

  const handleClickItem = (e: MouseEvent<HTMLElement>) => {
    const clickedId = e.currentTarget.id;
    const clickedCategory = e.currentTarget.dataset['category'] as Variant;
    if (clickedId) {
      if (clickItem[clickedCategory] === clickedId) {
        setClickItem({
          ...clickItem,
          [clickedCategory]: clickedCategory === 'skin' ? 'S-1' : '',
        });
      } else setClickItem({ ...clickItem, [clickedCategory]: clickedId });
    }
  };

  const getItem = useCallback(async () => {
    const data = await getMyItemList(user.id!);
    setItems(data);
  }, [user.id]);

  useEffect(() => {
    getItem();
    setLoading(false);
  }, [getItem]);

  useEffect(() => {
    setClickItem(user.character);
  }, [user.character]);

  useEffect(() => {
    dispatch(setCharacter(clickItem));
  }, [clickItem, dispatch]);

  useEffect(() => {
    if (items) {
      if (clickTag === 'all') {
        setItemList(items);
      } else {
        setItemList(items.filter((item) => item.category === clickTag));
      }
    }
  }, [clickTag, items]);
  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <>
          <StyleList
            itemList={itemList}
            clickTag={clickTag}
            clickItem={clickItem}
            handleClickItem={handleClickItem}
            handleClickTag={handleClickTag}
          />
        </>
      )}
    </>
  );
};

export default MyStyleList;
