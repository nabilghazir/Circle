import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export function AuthLayout() {
    const token = Cookies.get("token")
    let UserLogin = null;

    if (token) {
        try {
            const PayloadBase64 = token.split(".")[1];
            if (PayloadBase64) {
                const DecodedPayload = JSON.parse(atob(PayloadBase64))
                UserLogin = DecodedPayload
            }
        } catch (error) {
            console.log("Failed to decode token : ", error);
        }
    }

    if (UserLogin) {
        return <Navigate to={"/"} />
    }

    return <Outlet />
}