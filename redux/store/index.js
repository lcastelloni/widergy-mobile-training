import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { HistoryApp, ReducerReduxForm } from '../reducers';

const reducers = combineReducers({
  form: formReducer,
  HistoryApp,
  ReducerReduxForm,
});

const STORE = createStore(reducers);

export default STORE;
