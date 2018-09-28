import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from 'reducers';
import Routes from 'routes';
import createSagaMiddleware from 'redux-saga'
// import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  watchFetch,
  watchMovieDetail,
} from 'sagas';

const logger = store => {
  return next => {
    return action => {
      console.log('[Midlleware] dispatching', action);
      next(action);
    }
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      logger,
    )
  )
);
sagaMiddleware.run(watchFetch);
sagaMiddleware.run(watchMovieDetail);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
