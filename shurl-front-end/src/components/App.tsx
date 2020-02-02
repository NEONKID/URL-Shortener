import React, { Fragment } from 'react';

import Header from './Header';
import Body from './Body';

import './App.css';

const App = () => {
    return (
        <Fragment>
            <section className="hero is-info is-fullheight">
                <Header />
                <Body />
            </section>
        </Fragment>
    );
};

export default App;
