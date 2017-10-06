
import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import './Info.css';

class Info extends React.Component {

    render() {
        const arr = this.props.catalog;
        const result = arr.reduce( (sum, current) => sum + current.price , 0);
        const average = (arr.length === 0) ? 0 : (result /  arr.length);
        const titleStyle = { fontWeight: 600 };
        return (
            <div className="info-container">
                <Card className="info-card">

                    <CardHeader
                        title={`Hello,  ${this.props.userName} !`}
                        subtitle={this.props.isAdmin ? '(Admin)' : '(User)'}
                        titleStyle={titleStyle}/>

                    <CardText>
                        <h3>Catalog info:</h3>
                        <ul>
                            <li>Products quantity: { arr.length }</li>
                            <li>Sum of prices: { result.toFixed(2) }</li>
                            <li>Average price: { average.toFixed(2) }</li>
                        </ul>
                    </CardText>

                    {(this.props.isAdmin)
                        ? ( <CardActions>
                                <RaisedButton label="Delete catalog" onClick={this.props.onDelete}/>
                            </CardActions> )
                        : ''
                    }
                </Card>
            </div>
        );
    }
}

Info.propTypes = {
    catalog:    PropTypes.array.isRequired,
    userName:   PropTypes.string.isRequired,
    isAdmin:    PropTypes.bool.isRequired,
    onDelete:   PropTypes.func
};

export default Info;