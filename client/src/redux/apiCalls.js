import { logout, loginFailure, loginStart, loginSuccess, signupStart, signupSuccess, signupFail } from "./userSlice"
import { publicRequest, userRequest } from "../utilities/requestMethod"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productSlice";

// Auth
export const login = async (dispatch,  user ) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const signup = async (dispatch, user) => {
    dispatch(signupStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(signupSuccess(res.data))
    } catch (error) {
        dispatch(signupFail())
        
    }
}

export const logoutDispatch = async (dispatch) => {
    dispatch(logout());
}

// Product

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`, product)
        dispatch(updateProductSuccess(res.data))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (dispatch, product) => {
    dispatch(addProductStart());
    try {
        const res =await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}