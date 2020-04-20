import cakeReducer from './cakeReducer';
import icecreamReducer from './icecreamReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

export default combineReducers({cakeReducer, icecreamReducer, userReducer});
