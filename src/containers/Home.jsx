
import React from 'react';
import { connect } from 'react-redux'
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
    dispatch(getCatalog());
    return {
        onDelete: () => {
            dispatch(deleteCatalog());
        }
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;