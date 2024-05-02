import { Provider } from 'react-redux';
import Router from './router/Router';
import './styles/App.css';

import React from 'react';
import { store } from './data/reducer/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;


