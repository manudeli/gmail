import 'tailwindcss/tailwind.css';
import { store } from '../store';
import { Provider } from 'react-redux';

import { AppProps } from 'next/app';
import Navigation from '../components/navigation';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="flex">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default App;
