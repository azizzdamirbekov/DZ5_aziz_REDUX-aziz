import { createSlice } from "@reduxjs/toolkit";

const CalcSlice = createSlice({
    name: "Calc",
    initialState: {
        num1: 0,
        num2: 0,
        result: "",
        error: ""
    },
    reducers: {
        setNum1: (state, action) => {
          state.num1 = action.payload;
        },
        setNum2: (state, action) => {
          state.num2 = action.payload;
        },
        setResult: (state, action) => {
          state.result = action.payload;
        },
        setError: (state, action) => {
          state.error = action.payload;
        },
      },
    })

export const { setNum1, setNum2, setResult, setError } = CalcSlice.actions;

export default CalcSlice.reducer;