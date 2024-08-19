// src/app/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.scss';
import { ThemeProvider } from 'styled-components';
import ibm  from '@carbon/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ibm}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
