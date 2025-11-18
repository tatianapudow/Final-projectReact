import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

export const stores = configureStore ({
    reducer:{
        cart: cartReducer
    }
})
