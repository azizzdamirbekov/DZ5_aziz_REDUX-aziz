import { configureStore } from "@reduxjs/toolkit";
import CalcSlice from "./CalcSlice";

export const store = configureStore({
    reducer: {
        CalcSlice
    }
})