
import React from 'react';

import ErrorIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import { red500 } from 'material-ui/styles/colors';

import './Content.css';

class ErrorPage extends React.Component {

    render() {
        const iconStyle = {
            width: '10%',
            height: '10%'
        };
        const style = {
            textAlign: 'center'
        };
        return (
            <div className="container">
                <div className="content">
                    <h3 style={style}><ErrorIcon style={iconStyle} color={red500} /></h3>
                    <h3 style={style}>Access is denied!</h3>
                </div>
            </div>
        );
    }
}

export default ErrorPage;