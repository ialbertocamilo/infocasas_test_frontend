import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import App from './App';
import theme from './theme';
import TaskStore from './store/TaskStore'
import {Provider} from 'mobx-react'

ReactDOM.render(
    <Provider TaskStore={TaskStore}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Provider>
    ,
    document.querySelector('#root'),
);
