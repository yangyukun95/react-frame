import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from 'Store';

import 'normalize.css';
import './styles/base.css';
import './styles/global.css';

import routes from './routes';

const store = createReduxStore();

const render = (content) => {
  const app = (process.env.NODE_ENV === 'production') ? (
    <Provider store={store}>
      { content }
    </Provider>
  ) : (() => {
    const { AppContainer } = require('react-hot-loader');
    return (
      <AppContainer>
        <Provider store={store}>
          { content }
        </Provider>
      </AppContainer>
    );
  })();

  ReactDOM.render(app, document.getElementById('app'));
};

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes);
  });
}
