// بسم الله الرحمن الرحيم
//import { configureStore } from '@reduxjs/toolkit'
//import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore,combineReducers,applyMiddleware} from 'redux'

import anecReducer  from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'
const reducer = combineReducers({
  'anecdotes': anecReducer,
  'notification': notificationReducer,
  'filter': filterReducer
})
const appStore = createStore(reducer,applyMiddleware(thunk))

export default appStore 