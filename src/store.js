import { createStore,applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
export default function configureStore(initialState={}) {
const middlewares=[thunk]
const composeEnhancer = typeof composeWithDevTools !== undefined ? composeWithDevTools : compose

    const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(...middlewares)))
    return store
}


