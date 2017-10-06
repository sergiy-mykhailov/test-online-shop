
import React from 'react';
import { connect } from 'react-redux'
import { saveProduct } from '../actions'
import ProductEditor from '../components/ProductEditor.jsx';

const mapDispatchToProps = (dispatch) => {

    return {
        onSave: (product) => {
            dispatch(saveProduct(product));
        }
    }
};

const ProductEditorContainer = connect(
    null,
    mapDispatchToProps
)(ProductEditor);

export default ProductEditorContainer;