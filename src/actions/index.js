
import AppConstants from '../constants/AppConstants';
import api from '../api';

export const setUser = (user) => {
    return {
        type: AppConstants.USER_SET,
        user
    };
};

export const getCatalog = () => {
    return {
        type: AppConstants.CATALOG_GET,
        catalog: api.getCatalog()
    };
};

export const deleteCatalog = () => {
    api.deleteCatalog();
    return {
        type: AppConstants.CATALOG_DELETE
    };
};

export const deleteProduct = (id) => {
    api.deleteProduct(id);
    return {
        type: AppConstants.PRODUCT_DELETE,
        id
    };
};

export const saveProduct = (product) => {
    api.saveProduct(product);
    return {
        type: AppConstants.PRODUCT_SAVE,
        product
    };
};
