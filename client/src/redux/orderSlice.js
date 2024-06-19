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
        // Get Order
        getOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.order = action.payload;
        },
        getOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // Add to Order
        createOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        createOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.order = action.payload;
        },
        createOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getOrderStart, getOrderSuccess, getOrderFailure,
    addOrderStart, createOrderSuccess, createOrderFailure
} = orderSlice.actions;

export default orderSlice.reducer;
