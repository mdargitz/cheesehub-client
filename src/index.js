import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CheeseList cheeses={['1','2']} />, document.getElementById('root'));
registerServiceWorker();
