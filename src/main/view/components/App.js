import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

import { RaisedButton, MuiThemeProvider } from 'material-ui';
import { fullBlack, blue500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        textColor: fullBlack
    },

    appBar: {
        color: blue500
    }
})

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Header />
                <Container />
                <Footer />
            </div>
        </MuiThemeProvider>
    );
}

export default App;