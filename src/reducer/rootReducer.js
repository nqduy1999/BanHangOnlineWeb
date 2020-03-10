import {combineReducers} from 'redux';

import AuthenticationReducer from './AuthenticationReducer.js';
import CartReducer from './CartReducer';
const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer
});

export default rootReducer;