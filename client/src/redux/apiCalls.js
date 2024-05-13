import { logout, loginFailure, loginStart, loginSuccess, signupStart, signupSuccess, signupFail } from "./userSlice"
import { publicRequest } from "../utilities/requestMethod"


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