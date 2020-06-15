import { combineReducers } from 'redux';
import user from './user_reducer';
import products from './products_reducer';
import admin from './admin_reducer';

const rootReducer = combineReducers({
    user,
    admin,
    products
});

export default rootReducer;