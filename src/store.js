import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
	reducers,
	{ }, // default state of the application
	compose(
		applyMiddleware(reduxThunk)
        )
)

export default store;

