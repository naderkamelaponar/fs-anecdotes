// بسم الله الرحمن الرحيم
import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
const appStore = configureStore({reducer:{
  anecdotes:anecdoteReducer,notification:notificationReducer,filter:filterReducer
}})
export default appStore 