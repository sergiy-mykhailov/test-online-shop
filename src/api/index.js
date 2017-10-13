
import catalog from './catalog.json';

export default {

    getCatalog () {
        return new Promise((resolve, reject) => {
            setTimeout( () => {

                let localCatalog;
                try {
                    localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
                } catch (err) { reject(err) }

                if (localCatalog) catalog.push(...localCatalog);

                resolve(catalog);
            }, 200);
        });
    },

    deleteCatalog () {
        return new Promise((resolve, reject) => {
            setTimeout( () => {

                localStorage.setItem('online-shop-catalog', JSON.stringify([]));
                resolve();
            }, 200);
        });
    },

    saveProduct (product) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {

                let localCatalog;
                try {
                    localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
                } catch (err) { reject(err) }

                if (!localCatalog) localCatalog = [];

                localCatalog.push(product);
                localStorage.setItem('online-shop-catalog', JSON.stringify(localCatalog));

                resolve();
            }, 200);
        });
    },

    deleteProduct (id) {

        return new Promise((resolve, reject) => {
            setTimeout( () => {

                let localCatalog;
                try {
                    localCatalog = JSON.parse(localStorage.getItem('online-shop-catalog'));
                } catch (err) { reject(err) }

                if (!localCatalog) reject(new Error('Data not available...'));

                const newCatalog = localCatalog.filter( (item) => item.id !== id );
                localStorage.setItem('online-shop-catalog', JSON.stringify(newCatalog));

                resolve();
            }, 200);
        });
    }
}