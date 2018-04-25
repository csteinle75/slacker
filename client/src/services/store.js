import {combineReducers, createStore} from 'redux'
import chatReducer from 'reducers/chatReducer'
import authReducer from 'reducers/authReducer'

const rootReducer = combineReducers({chatReducer, authReducer})

const store = createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store