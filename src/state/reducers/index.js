import { combineReducers } from 'redux'
import accountReducer from './accountReducer'

const reducers = combineReducers({
	account: accountReducer, // account is the KEY and accountReducer is the value , initialy 0
})

export default reducers
