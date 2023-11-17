import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/authContext';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <GlobalStyles />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
