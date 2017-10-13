
import React from 'react';
import { connect } from 'react-redux'

import { deleteProduct } from '../actions'
import api from '../api';
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
            api.deleteProduct(id)
                .then(() => dispatch(deleteProduct(id)),
                    err => console.error(err));
        }
    }
};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);

export default CatalogContainer;