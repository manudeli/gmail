import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Head from 'next/head';
import MailLayout from '../components/MailLayout';
import Loading from '../components/UI/Loading';
// Styled Component
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme';

function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>Gmail - Clone by Jonghyeon</title>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <link rel="icon" href="/logo_gmail.png" />
          </Head>
          <MailLayout>
            <Component {...pageProps} />
          </MailLayout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
