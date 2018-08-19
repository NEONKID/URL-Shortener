import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { FontIcon, Paper } from 'material-ui';

const homeIcon = <FontIcon className="muidocs-icon-action-home" />;
const fStyle = {
    position: 'fixed',
    width: '100%',
    left: '0',
    bottom: '0'
}

const Footer = () => {
    return (
        <div style={fStyle}>
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={0}>
                    <BottomNavigationItem
                        label="Main"
                        icon={homeIcon} />
                </BottomNavigation>
            </Paper>
        </div>
    );
}

export default Footer;