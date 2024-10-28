import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Container, Loading } from '@/components';
import Header from '@/containers/common/Header';
import { Container as MainPageContainer } from '@/styles/common/Layout';

import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import { handleResize } from '@/modules/BaseFontSize';
import { isMobileDevice } from '@/modules/Mobile';

import { usePathname } from 'next/navigation';

const App = ({ Component, pageProps }: AppProps) => {
  const path = usePathname();
  const queryClient = new QueryClient();
  const [isMobile, setIsMobile] = useState(false);
  const isNotMainPage = path !== '/' && !path.startsWith('/game/');

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
          <Container path={path}>

            {isMobile ? (
              <h1>PC로 접속해 주세요.</h1>
            ) : (
              <MainPageContainer>
                {isNotMainPage && <Header />}
                <Component {...pageProps} />
              </MainPageContainer>
            )}
          </Container>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default App;
