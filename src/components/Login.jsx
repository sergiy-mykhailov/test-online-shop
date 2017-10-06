
import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect'

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', redirect: false };
    }

    loginAsUser = () => {
        if (!this.state.name) return;

        this.props.onLogin({ name: this.state.name, isAdmin: false });

        this.setState({ redirect: true });
    } ;

    loginAsAdmin = () => {
        if (!this.state.name) return;

        this.props.onLogin({ name: this.state.name, isAdmin: true });

        this.setState({ redirect: true });
    } ;

    handleNameChange = (event, newValue) => {
        this.setState({ name: newValue });
    };

    render() {
        if (this.state.redirect) return ( <Redirect to="/"/> );

        const styleCard = { margin: '20px auto', width: '30%' };
        const styleBtn = { margin: 12 };
        const titleStyle = { fontSize: '48px' };

        return (
            <Card style={styleCard} >
                <CardHeader
                    title="Welcome!"
                    titleStyle={titleStyle}
                />

                <CardText >
                    <TextField
                        floatingLabelText="Enter your name"
                        onChange={this.handleNameChange}
                    />
                </CardText>

                <CardActions>
                    <RaisedButton label="Login as User" onClick={this.loginAsUser} style={styleBtn} />
                    <RaisedButton label="Login as Admin" onClick={this.loginAsAdmin} style={styleBtn} />
                </CardActions>

            </Card>
        );
    }
}

Login.propTypes = {
     onLogin: PropTypes.func.isRequired,
};

export default Login;
