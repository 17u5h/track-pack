import React from "react";
import {Navigate, Outlet} from "react-router-dom";

type propTypes = {
	redirectPath: string
	isAllowed: boolean
}

export function ProtectedRoute({redirectPath = "/", isAllowed}: propTypes) {

	console.log(isAllowed)
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace={true}/>
	}
	return <Outlet/>
}