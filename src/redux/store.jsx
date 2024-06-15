import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './reducers/ProductReducer'

export const store = configureStore ({
    reducer : {
        storeReducer
    }
})