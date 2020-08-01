// third party
import React from 'react';
import ReactDOM from 'react-dom';
//for making provider
import { Provider } from 'react-redux';
// making store to give us back all the reducers and states (data)
import { createStore } from 'redux';
//----made by me 
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
   document.querySelector('#root')
);