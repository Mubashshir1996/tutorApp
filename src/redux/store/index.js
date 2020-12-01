import { createStore, applyMiddleware } from "redux";
import { appreducer } from '../reducer'
import thunk from 'redux-thunk'

export const store = createStore(appreducer,applyMiddleware(thunk))