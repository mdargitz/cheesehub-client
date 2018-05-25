import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import {fetchCheeses} from './actions/cheese';

console.log(store.getState());
store.dispatch(fetchCheeses());
console.log(store.getState());



ReactDOM.render(<CheeseList cheeses={['1','2']} />, document.getElementById('root'));
registerServiceWorker();
