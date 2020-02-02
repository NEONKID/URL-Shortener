import React from 'react';

const URLBox = () => {
    return (
        <div className="box">
            <div className="field is-grouped">
                <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Enter URL" />
                </p>
                <p className="control">
                    <a href="#/" className="button is-info">
                        Create
                    </a>
                </p>
            </div>
        </div>
    );
};

export default URLBox;
