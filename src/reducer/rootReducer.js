import {combineReducers} from 'redux';

import AuthenticationReducer from './AuthenticationReducer';
import CartReducer from './CartReducer';
const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    cart: CartReducer
});

export default rootReducer;