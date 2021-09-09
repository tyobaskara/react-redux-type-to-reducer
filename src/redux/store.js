import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [Thunk, Logger];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

// Redux-Persist
const persistor = persistStore(store);

export { store, persistor };
