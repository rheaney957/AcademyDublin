import React from "react";
import "../styles/globals.css";

import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #0a1929 0%, #1a2f4a 50%, #2a4d6e 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }} />
      <Component {...pageProps} />
    </>
  );
}
