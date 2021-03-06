import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { CategoryReducer } from './Reducers/CategoryReducer'
import { OrderReducers } from './Reducers/OrderReducers'
import { ProductReducers } from './Reducers/ProductReducers'
import { UploadReducer } from './Reducers/UploadReducer'


const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    products : ProductReducers,
    category: CategoryReducer,
    upload: UploadReducer,
    orders: OrderReducers
})



const initialState = {
    products: [],
    category : [],
    upload: [],
    orders: []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;