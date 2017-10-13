
import React from 'react';
import { connect } from 'react-redux'

import api from '../api';
import { getCatalog, deleteCatalog } from '../actions'
import Home from '../components/Home.jsx';

const mapStateToProps = (state) => {
    return {
        isAdmin:    state.user.isAdmin,
        userName:   state.user.name,
        catalog:    state.catalog
    }
};

const mapDispatchToProps = (dispatch) => {

    api.getCatalog().then((catalog) => dispatch(getCatalog(catalog)),
            err => console.error(err));

    return {
        onDelete: () => {
            api.deleteCatalog().then(() => dispatch(deleteCatalog()),
                    err => console.error(err));
        }
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;