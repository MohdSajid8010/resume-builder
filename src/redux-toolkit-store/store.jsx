import { createStore } from 'redux'
import { ResmeReducers } from './reducers/CounterRed'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    resumeData: ResmeReducers
})

export const store = createStore(rootReducers)