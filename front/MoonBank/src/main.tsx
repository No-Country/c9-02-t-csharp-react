import React from 'react';
import ReactDOM from 'react-dom/client';
import MoonBankApp from './MoonBankApp';
import GlobalStyles from './shared/styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <MoonBankApp />
    </BrowserRouter>
  </React.StrictMode>
);
