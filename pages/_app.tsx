import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Head from 'next/head';
import MailLayout from '../components/MailLayout';
import { useAppSelector } from '../store/hooks';

function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo_gmail.png" />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <MailLayout>
          <Component {...pageProps} />
        </MailLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
