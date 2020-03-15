import {combineReducers} from 'redux';

import AddressReducer from './AddressReducer';
import AuthenticationReducer from './AuthenticationReducer.js';
import CartReducer from './CartReducer';

const RootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer,
    address: AddressReducer
});

export default RootReducer;