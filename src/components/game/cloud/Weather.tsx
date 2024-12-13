import { getR2URL } from '@/services/api';
import {
  Body,
  Content,
  Overlay,
  Title,
  Weather,
  WeatherImg,
  WeatherText,
} from '@/styles/cloud/Weather';
import { useEffect, useState } from 'react';

interface Props {
  weather: string;
}

const WeatherSlide = ({ weather }: Props) => {
  const weathers = [
    { weather: 'cloud', name: '구름', src: getR2URL('/assets/game/cloud.svg') },
    { weather: 'fog', name: '안개', src: getR2URL('/assets/game/fog.svg') },
    { weather: 'wind', name: '강풍', src: getR2URL('/assets/game/wind.svg') },
    { weather: 'segu', name: '세구', src: getR2URL('/assets/game/cloud.svg') },
  ];

  const selectedIndex = weathers.findIndex((item) => item.weather === weather);

  return (
    <Overlay>
      <Content>
        <Title>오늘의 날씨는?</Title>
        <Body>
          <Weather key={weather}>
            <WeatherImg
              src={weathers[selectedIndex].src}
              alt={weathers[selectedIndex].name}
            />
            <WeatherText>{weathers[selectedIndex].name}</WeatherText>
          </Weather>
        </Body>
      </Content>
    </Overlay>
  );
};

export default WeatherSlide;
