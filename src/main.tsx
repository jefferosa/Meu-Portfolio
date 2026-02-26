import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Importações do Material-UI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Nosso tema customizado (dark minimalista)
import { theme } from './theme.ts';

// Importação da fonte Inter (garantindo os pesos corretos para o MUI)
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* O CssBaseline puxa o fundo escuro do tema e reseta margens padrão */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);