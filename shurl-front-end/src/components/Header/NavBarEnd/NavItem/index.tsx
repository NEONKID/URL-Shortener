/* eslint-disable */

// ESLint에서 anchor에 대한 처리를 고민해야 함.
// a 태그에서 URI를 사용하지 않을 것인데, 계속 Warning 발생

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type niProps = {
    icon: IconDefinition;
    name: string;
};

const NavItem = (props: niProps) => {
    return (
        <span className="navbar-item">
            <a className="button is-white is-outlined">
                <span className="icon">
                    <FontAwesomeIcon icon={props.icon} />
                </span>
                <span>{props.name}</span>
            </a>
        </span>
    );
};

export default NavItem;
