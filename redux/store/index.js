import React from 'react';
import { createStore } from 'redux'
import HistoryApp from '../reducers'

const STORE = createStore(HistoryApp)

export default STORE