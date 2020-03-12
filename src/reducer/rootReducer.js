import {combineReducers} from 'redux';

import AuthenticationReducer from './authenticationReducer.js';
import CartReducer from './cartReducer';
import AddressReducer from './AddressReducer';
const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer,
    address: AddressReducer
});

export default rootReducer;