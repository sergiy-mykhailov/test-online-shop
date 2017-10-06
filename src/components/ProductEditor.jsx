
import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import './Content.css';

class ProductEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.initialState(),
            isOpen: false
        };
    }

    initialState = () => {
        return {
            title:          '',
            description:    '',
            price:          ''
        };
    };

    handleTitleChange = (event, newValue) => {
        this.setState({ title: newValue });
    };

    handleDescriptionChange = (event, newValue) => {
        this.setState({ description: newValue });
    };

    handlePriceChange = (event, newValue) => {
        if (!newValue) return;

        const arr = newValue.match(/[a-zA-Z\s]+/);
        if (arr) return;

        this.setState({ price: newValue });
    };

    handleSave = () => {
        if (!this.state.title || !this.state.description || !this.state.price) return;

        const price = parseFloat(this.state.price);
        if (isNaN(price) && !isFinite(price)) return;

        const product = {
            id:             Date.now(),
            title:          this.state.title,
            img:            "noimage.png",
            description:    this.state.description,
            price:          price
        };

        this.props.onSave(product);

        this.setState({
            ...this.initialState(),
            isOpen: true
        });
    };

    handleCancel = () => {
        this.setState(this.initialState());
    };

    handleOk = () => {
        this.setState({
            ...this.initialState(),
            isOpen: false
        });
    };

    renderErrorText = (value) => {
        if (!value) return "This field is required";
        return '';
    };

    render() {
        const actions = [
            <RaisedButton
                label="Ok"
                primary={true}
                onClick={this.handleOk}
            />,
        ];
        return (
            <div className="container">
                <div className="content">

                <h3>Add new product</h3>
                    <Card>
                        <CardHeader title="Product properties:" />

                        <CardText>
                            <div><TextField
                                floatingLabelText="Product title"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                errorText={this.renderErrorText(this.state.title)}
                            /></div>
                            <div><TextField
                                floatingLabelText="Product description"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                                errorText={this.renderErrorText(this.state.description)}
                            /></div>
                            <div><TextField
                                floatingLabelText="Price"
                                value={this.state.price}
                                onChange={this.handlePriceChange}
                                errorText={this.renderErrorText(this.state.price)}
                            /></div>
                        </CardText>

                        <CardActions>
                            <RaisedButton label="Save" onClick={this.handleSave}/>
                            <RaisedButton label="Cancel" onClick={this.handleCancel}/>
                        </CardActions>
                    </Card>
                    <Dialog
                        title="Product successfully saved!"
                        actions={actions}
                        modal={true}
                        open={this.state.isOpen}
                    />
                </div>
            </div>
        );
    }
}

ProductEditor.propTypes = {
    onSave:   PropTypes.func.isRequired
};

export default ProductEditor;