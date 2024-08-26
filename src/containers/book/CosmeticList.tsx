import { CosmeticList as List } from '@/components';
import { closeModal } from '@/redux/modal/modalSlice';
import { CosmeticStyles } from '@/styles/book/CosmeticType';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const options = Object.values(CosmeticStyles).map((style) => style.name);

const CosmeticList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
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

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleLeaveClick = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <List
      isOpen={isOpen}
      dropDownRef={dropDownRef}
      selectedOption={selectedOption}
      options={options}
      toggleDropdown={toggleDropdown}
      handleOptionClick={handleOptionClick}
      handleLeaveClick={handleLeaveClick}
    />
  );
};

export default CosmeticList;
