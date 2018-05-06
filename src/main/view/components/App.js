import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import RaisedButton from 'material-ui/RaisedButton';

import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
    palette: {
        accentiColor: deepOrange500
    }
})

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Header />
                <Footer />
            </div>
        </MuiThemeProvider>
    );
}

export default App;