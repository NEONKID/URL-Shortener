import React from 'react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { blue500, white } from 'material-ui/styles/colors';
import { FlatButton, IconMenu, IconButton, MenuItem, FontIcon } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() { this.setState({ open: !this.state.open }); }
    showBar() { this.setState({ show: 'bar', open: false }); }
    showFoo() { this.setState({ show: 'foo', open: false }); }

    render() {
        return (
            <Toolbar style={ { 'backgroundColor': blue500, 'color': white } }>
                <ToolbarTitle text="URL Shortener for N.K" />
                <ToolbarGroup>
                    <ToolbarSeparator />
                    <FlatButton
                        href="//github.com/neonkid" 
                        target="_blank"
                        label="Github Link" 
                        icon={<FontIcon className="muidocs-icon-custom-github" />} />
                    <IconMenu iconButtonElement= {
                        <IconButton touch={true}>
                            <MoreVertIcon />
                        </IconButton>
                    }>
                        <MenuItem primaryText="How to use"/>
                        <MenuItem primaryText="Credit"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default Header;