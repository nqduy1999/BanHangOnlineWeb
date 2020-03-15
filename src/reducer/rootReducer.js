import {combineReducers} from 'redux';

import AddressReducer from './AddressReducer';
import AuthenticationReducer from './AuthenticationReducer.js';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer,
    address: AddressReducer,
    pageProduct: ProductReducer
});

export default RootReducer;