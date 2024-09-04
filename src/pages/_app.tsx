import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { ContentContainer } from '@/styles/common/Layout';

import { CookiesProvider } from 'react-cookie';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';

import { handleResize } from '@/modules/BaseFontSize';
import { isMobileDevice } from '@/modules/Mobile';

import { usePathname } from 'next/navigation';
import useSound from '@/hooks/useSound';

const App = ({ Component, pageProps, router }: AppProps) => {
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', 0.08, 0, true);
  const path = usePathname();

  const queryClient = new QueryClient();
  const [isMobile, setIsMobile] = useState(false);

  const onPlay = useCallback(() => {
    switch (path) {
      case '/': {
        if (sound && sound.playing()) sound.stop();
        break;
      }
      case '/roomlist': {
        if (sound && !sound.playing()) sound.play();
        break;
      }
      case '/room': {
        if (sound && !sound.playing()) sound.play();
        break;
      }
      case '/game': {
        if (sound && sound.playing()) sound.stop();
        break;
      }
      default: {
        if (sound && sound.playing()) sound.stop();
        break;
      }
    }
  }, [path, sound]);

  useEffect(() => {
    onPlay();
  }, [onPlay]);

  useEffect(() => {
    setIsMobile(isMobileDevice());

    if (!isMobile) {
      const resizeHandler = () => handleResize();

      handleResize();

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [isMobile]);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <GlobalStyle />
          <ContentContainer path={path}>
            {isMobile ? (
              <h1>PC로 접속해 주세요.</h1>
            ) : (
              <Component {...pageProps} />
            )}
          </ContentContainer>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default App;
