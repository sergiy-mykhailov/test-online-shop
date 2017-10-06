
import AppConstants from '../constants/AppConstants';

const catalog = (state = [], action) => {
    switch (action.type) {

        case AppConstants.CATALOG_GET:
            return [ ...action.catalog ];

        case AppConstants.CATALOG_DELETE:
            return [];

        case AppConstants.PRODUCT_DELETE:
            return state.filter( (item) => item.id !== action.id );

        case AppConstants.PRODUCT_SAVE:
            return [ ...state, action.product ];

        default:
            return state
    }
};

export default catalog;
