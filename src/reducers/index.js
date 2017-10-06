
import { combineReducers } from 'redux';
import catalog from './catalog';
import user from './user';

const reducer = combineReducers({
    user,
    catalog
});

export default reducer;
