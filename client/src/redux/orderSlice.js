import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: {},
    isFetching: false,
    error: false,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const {
} = orderSlice.actions;

export default orderSlice.reducer;
