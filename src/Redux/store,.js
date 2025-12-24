import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice"
export const Store = configureStore({
    reducer: {
        cart: cartSlice
    }
});