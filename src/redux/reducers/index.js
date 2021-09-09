import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './modal/modal.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modal']
};

const rootReducer = combineReducers({
  modal: modalReducer
});

export default persistReducer(persistConfig, rootReducer);
