import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@services/query';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
