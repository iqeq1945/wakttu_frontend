import type { AppProps } from 'next/app';
import { useEffect, useState } from "react";

import '@/styles/globals.css';
import layout from '@/styles/modules/layout.module.css'

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import { handleResize } from "@/modules/BaseFontSize";
import { isMobileDevice } from '@/modules/Mobile';

const App = ({ Component, pageProps }: AppProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileDevice());

        if (!isMobile) {
            const resizeHandler = () => handleResize();
        
            handleResize();
        
            window.addEventListener("resize", resizeHandler);
        
            return () => {
                window.removeEventListener("resize", resizeHandler);
            };
        }
    }, [isMobile]);

    return (
        <Provider store={store}>
            <div className={layout.contentContainer}>
                {isMobile ? (
                    <h1>PC로 접속해 주세요.</h1>
                ): (
                    <Component {...pageProps} />
                )}
            </div>
        </Provider>
    );
}

export default App
