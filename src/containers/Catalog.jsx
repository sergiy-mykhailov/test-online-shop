
import React from 'react';
import { connect } from 'react-redux'
import { deleteProduct } from '../actions'
import Catalog from '../components/Catalog.jsx';

const mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        isAdmin: state.user.isAdmin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            dispatch(deleteProduct(id));
        }
    }
};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);

export default CatalogContainer;