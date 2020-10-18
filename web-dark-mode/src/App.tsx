import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import GlobalStyle from './styles/global';
import Routes from './routes';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import './styles/global.css';

import { ThemeProvider } from 'styled-components';

function App() {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes toogleTheme={toggleTheme} />

        </ThemeProvider>
    );
}

export default App;

