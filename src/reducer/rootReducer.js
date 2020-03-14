import {combineReducers} from 'redux';
import AuthenticationReducer from './AuthenticationReducer.js';
import CartReducer from './CartReducer';
import AddressReducer from './AddressReducer';

const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer,
    address: AddressReducer
});

export default rootReducer;