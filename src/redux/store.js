import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { ProductReducers } from './Reducers/ProductReducers'


const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    products : ProductReducers
})



const initialState = {
    products: []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;