import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';
import { Button } from '@material-ui/core';

const message = 'I dont care which snackbar I belong to';
ReactDOM.render(<SnackbarProvider action={(
    <Button onClick={() => alert(message) }>
        {'Alert'}
    </Button>
)}><App />
</SnackbarProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
