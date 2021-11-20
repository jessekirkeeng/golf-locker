import { createStore, combineReducers } from 'redux'
import  reducer  from './reducer'
import  bagReducer  from './bagReducer'

const rootReducer = combineReducers({
	user: reducer,
	bag: bagReducer
})

export default createStore(reducer)