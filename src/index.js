import React from 'react';
import './index.css';
import App from './components/App';

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
    palette: {
        primary: {
            main: "#61dafb",
        },
        secondary: {
            main: "#ff1500",
        }
    }
}) 

root.render(
    <ThemeProvider theme={theme}>
        <App tab="home" />
    </ThemeProvider>
);

