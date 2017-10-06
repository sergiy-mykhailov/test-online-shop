
import React from 'react';
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Login from '../components/Login.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => {
            dispatch(setUser(user));
        }
    }
};

const LoginContainer = connect(
    null,
    mapDispatchToProps
)(Login);

export default LoginContainer;