import { createStore, combineReducers } from 'redux';
import FreezerReducer from './reducers/Freezer';
import OrderReducer from './reducers/Orders';

const rootReducer = combineReducers({
  Freezer: FreezerReducer,
  order: OrderReducer,
})

export default createStore(rootReducer);