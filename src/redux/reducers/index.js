import App from 'src/App.js';
import {combineReducers} from 'redux';
import {productReducer} from './productReducer';

const reducers= combineReducers({
    allProducts: productReducer,
});