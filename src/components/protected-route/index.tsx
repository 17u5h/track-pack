import React from "react";
import {Navigate, Outlet} from "react-router-dom";

type Props = {
	redirectPath: string
	isAllowed: boolean
}

export function ProtectedRoute({redirectPath = "/", isAllowed}: Props) {

	if (!isAllowed) {
		return <Navigate to={redirectPath} replace={true}/>
	}
	return <Outlet/>
}