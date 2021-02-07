import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// REDUCERS
import authReducer from './reducers/authReducer'
import spotReducer from './reducers/spotReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    spot: spotReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, middleware)