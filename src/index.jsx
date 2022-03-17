import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider ,createTheme} from '@mui/material';

import "./index.css"
import App from './App'
import { deepOrange } from '@mui/material/colors';

const theme=createTheme({
    palette:{
        primary:deepOrange,
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router><App /></Router>
    </ThemeProvider>,
    document.getElementById('root')
);