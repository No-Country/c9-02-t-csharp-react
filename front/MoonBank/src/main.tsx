import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './shared/styles/globalStyles';
import MoonBankApp from './MoonBankApp';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <MoonBankApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
