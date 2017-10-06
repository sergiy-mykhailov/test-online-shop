
import catalog from './catalog.json';

export default {

    getCatalog () {
        let localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
        if (localCatalog) catalog.push(...localCatalog);

        return catalog;
    },

    deleteCatalog () {
        localStorage.setItem('online-shop-catalog', JSON.stringify([]));
    },

    saveProduct (product) {
        let localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
        if (!localCatalog) localCatalog = [];

        localCatalog.push(product);

        localStorage.setItem('online-shop-catalog', JSON.stringify(localCatalog));
    },

    deleteProduct (id) {
        let localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
        if (!localCatalog) return;

        const newCatalog = localCatalog.filter( (item) => item.id !== id );

        localStorage.setItem('online-shop-catalog', JSON.stringify(newCatalog));
    }
}