'use client'

import { useEffect, useState, useRef } from "react";
import { handleResize } from "./sources/modules/BaseFontSize";

import "./sources/styles/globals.css";
import layout from './sources/styles/modules/layout.module.css';

import { Provider } from 'react-redux';
import { store } from './sources/redux/store';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  useEffect(() => {
    const resizeHandler = () => handleResize();

    handleResize();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <html lang="ko-kr" dir="ltr">
      <body>
        <div className={layout.contentContainer}>
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}

export default RootLayout