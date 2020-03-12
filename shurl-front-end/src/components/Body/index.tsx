import React from 'react';
import { Translation } from 'react-i18next';

import URLBox from './URLBox';

const Body = () => {
    return (
        <div className="hero-body">
            <div className="container">
                <div className="column is-6 is-offset-3 has-text-centered">
                    <h1 className="title">URL-Shortener</h1>
                    <Translation>
                        {(t, { i18n, lng }, ready) => (
                            <h2 className="subtitle">
                                {ready ? t('appIntro') : 'default'}
                            </h2>
                        )}
                    </Translation>
                </div>
                <URLBox />
            </div>
        </div>
    );
};

export default Body;
