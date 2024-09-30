import { CosmeticList as List } from '@/components';
import { CosmeticInfo as Info } from '@/components';
import { closeModal } from '@/redux/modal/modalSlice';
import { getItemList } from '@/services/api';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ITEM {
  id: string;
  name: string;
  url: string;
  category: string;
  author: string;
  [x: string]: any;
}

const Cosmetic = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState<ITEM>();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<ITEM[]>([]);
  const [selectedOption, setSelectedOption] = useState({
    category: 'all',
    name: '전체',
  });
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = ({
    category,
    name,
  }: {
    category: string;
    name: string;
  }) => {
    setSelectedOption({ category, name });
    setIsOpen(false);
  };

  const handleLeaveClick = () => {
    dispatch(closeModal());
  };

  const handleInfoClick = (e: any) => {
    const id = e.currentTarget.dataset.id;
    const item = items.find((item) => item.id === id);
    if (item) setInfo(item);
  };

  useEffect(() => {
    const getItems = async () => {
      const data = await getItemList();
      setItems(data);
      setInfo(data[0]);
    };
    getItems();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {info && <Info info={info!} />}
      <List
        dataset={items}
        isOpen={isOpen}
        dropDownRef={dropDownRef}
        selectedOption={selectedOption}
        toggleDropdown={toggleDropdown}
        handleInfoClick={handleInfoClick}
        handleOptionClick={handleOptionClick}
        handleLeaveClick={handleLeaveClick}
      />
    </>
  );
};

export default Cosmetic;
