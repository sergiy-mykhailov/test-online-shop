
import React from 'react';
import { connect } from 'react-redux'

import api from '../api';
import { saveProduct } from '../actions'
import ProductEditor from '../components/ProductEditor.jsx';

const mapDispatchToProps = (dispatch) => {

    return {
        onSave: (product) => {
            api.saveProduct(product).then(() => dispatch(saveProduct(product)),
                err => console.error(err));
        }
    }
};

const ProductEditorContainer = connect(
    null,
    mapDispatchToProps
)(ProductEditor);

export default ProductEditorContainer;