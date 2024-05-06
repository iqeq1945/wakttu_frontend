import type { AppProps } from 'next/app';
import { useEffect, useState, useRef } from "react";

import '@/styles/globals.css';
import layout from '@/styles/modules/layout.module.css'

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import { handleResize } from "@/modules/BaseFontSize";

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const resizeHandler = () => handleResize();
    
        handleResize();
    
        window.addEventListener("resize", resizeHandler);
    
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <Provider store={store}>
            <div className={layout.contentContainer}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default App
