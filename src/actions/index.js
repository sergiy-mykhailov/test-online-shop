
import AppConstants from '../constants/AppConstants';

export const setUser = (user) => {
    return {
        type: AppConstants.USER_SET,
        user
    };
};

export const getCatalog = (catalog) => {
    return {
        type: AppConstants.CATALOG_GET,
        catalog
    };
};

export const deleteCatalog = () => {
    return {
        type: AppConstants.CATALOG_DELETE
    };
};

export const deleteProduct = (id) => {
    return {
        type: AppConstants.PRODUCT_DELETE,
        id
    };
};

export const saveProduct = (product) => {
    return {
        type: AppConstants.PRODUCT_SAVE,
        product
    };
};
