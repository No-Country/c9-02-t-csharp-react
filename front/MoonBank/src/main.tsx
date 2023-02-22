import React from 'react';
import ReactDOM from 'react-dom/client';
import MoonBankApp from './MoonBankApp';
import GlobalStyles from './shared/styles/globalStyles';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <GlobalStyles/>
    <MoonBankApp />
  </React.StrictMode>
);
