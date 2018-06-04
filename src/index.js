import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { addProductToFreezer, updateTemperature } from './actions/Freezer';
import { CHOCOLATE } from './constants/Flavours';

store.subscribe(() => console.log(store.getState()));

store.dispatch(updateTemperature(-8));
store.dispatch(updateTemperature(-9));
store.dispatch(addProductToFreezer(CHOCOLATE, 10));


// ReactDOM.render(<App />, document.getElementById('root'));

