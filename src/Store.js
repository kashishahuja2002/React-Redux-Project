import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import RootReducer from './Reducer/RootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;