import WeatherSlide from '@/components/game/cloud/Weather';
import { useState } from 'react';
const Test = () => {
  const [weather, setWeather] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setWeather('cloud')}>날씨 구름</button>
      <button onClick={() => setWeather('fog')}>날씨 구름</button>
      <button onClick={() => setOpen(true)}>open</button>

      {isOpen && weather && <WeatherSlide weather={weather} />}
    </>
  );
};

export default Test;
