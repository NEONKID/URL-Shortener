import React from 'react';
import { AutoComplete, Paper, RaisedButton } from 'material-ui';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const conStyle = {
    display: 'table',
    textAlign: 'center',
    width: '50%',
    height: '50%',
    margin: '300px auto'
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: []
        }
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    };

    handleUpdateInput(value) {
        this.setState({
            datasource: [
                'http://' + value + '.com',
                'http://' + value + '.net',
                'http://' + value + '.io',
                'http://' + value + '.xyz'
            ]
        });
    }

    render() {
        return (
            <div style={conStyle}>
                <AutoComplete
                    fullWidth={true}
                    hintText='example.com'
                    dataSource={this.state.datasource}
                    onUpdateInput={this.handleUpdateInput}
                    floatingLabelText="Input Your URL..." />
                <RaisedButton
                    style={{ display: 'inline'}}
                    label="Create"
                    primary={true} />
            </div>
        );
    }
}

export default Container;