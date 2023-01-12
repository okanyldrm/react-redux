import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSM/Counter'

export default configureStore({
  reducer: {counter : counterReducer,},
})