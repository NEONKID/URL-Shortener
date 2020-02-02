import React from 'react';

import URLBox from './URLBox';

const Body = () => {
    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-6 is-offset-3">
                    <h1 className="title">URL-Shortener</h1>
                    <h2 className="subtitle">
                        URL-Shortener를 이용해 링크를 바로가기화 하세요. 바로가기 된 링크는 설정된 주소로 이동해줍니다.
                    </h2>
                    <URLBox />
                </div>
            </div>
        </div>
    );
};

export default Body;
