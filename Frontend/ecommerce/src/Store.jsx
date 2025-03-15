import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/Productslices"; 
import singleProductReducer from "./slices/Singleproductslice"; 
const rootReducer=combineReducers({
  productsList: productReducer,  
  productDetails: singleProductReducer, 
})

const store=configureStore({
    reducer:rootReducer,
    devTools: process.env.NODE_ENV !== "production"
})

export default store;








































// OLD WAY
// import {createStore,combineReducers,applyMiddleware} from 'redux';
// import {thunk} from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { ProductListReducers } from './reducers/Productsreducers';


// const reducers=combineReducers({
//     productsList:ProductListReducers
// })

// const intialState={}
// const middleware=[thunk]
// const store=createStore(reducers,intialState,composeWithDevTools(applyMiddleware(...middleware)))


// export default store;