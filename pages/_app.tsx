import 'tailwindcss/tailwind.css';
import { store } from '../store';
import { Provider } from 'react-redux';

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
