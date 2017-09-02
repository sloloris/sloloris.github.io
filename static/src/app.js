import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Landing from './components/Landing';
import reducers from './reducers';

const store = createStore(
  reducers
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Landing />
  </Provider>,
  rootEl
)

render()
store.subscribe(render)