/* eslint-disable */

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
