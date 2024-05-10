import { logout, loginFailure, loginStart, loginSuccess } from "./userSlice"
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

export const logoutDispatch = async (dispatch) => {
    dispatch(logout());
}