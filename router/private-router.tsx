import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

export function ProtectedLayout() {
    const token = Cookies.get("token");
    console.log("Token from cookies: ", token); // Check if token exists

    if (!token) {
        console.log("No token found, redirecting to login.");
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
