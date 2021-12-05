import { createStore } from 'redux'
import  reducer  from './reducer'

const rootReducer = reducer
const store = createStore(reducer)
export default createStore(rootReducer)