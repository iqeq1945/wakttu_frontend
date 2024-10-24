import React, { useEffect, useState } from 'react';
import Header from '@/containers/common/Header';
import MainSection from '@/components/dictionary/MainSection';
import WordSection from '@/components/dictionary/WordSection';
import { Container } from '@/components/dictionary/Container';

const Dictionary: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainSection />
      <WordSection />
    </Container>
  );
};

export default Dictionary;
