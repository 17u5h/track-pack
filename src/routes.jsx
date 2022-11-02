import {Route, Routes} from "react-router-dom";
import React from "react";
import {NotFound} from "./pages/not-found";
import {MainScreen} from "./pages/main";
import {ProtectedRoute} from "./components/protected-route"
import {Login} from "./pages/login/index";
import {MyTracksScreen} from "./pages/my-tracks/MyTracksScreen"
import {CollectionScreen} from "./pages/collection/CollectionScreen"
import {Registration} from "./pages/login/registration";
import {useSelector} from "react-redux";
import {tokenSelector} from "./store/selectors/loginSelector";

export function AppRoutes() {
	const token = useSelector(tokenSelector)



	return (

			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/registration" element={<Registration/>}/>
				<Route element={<ProtectedRoute redirectPath={'/'} isAllowed={Boolean(token)}/>}>
					<Route path="/main" element={<MainScreen/>}/>
					<Route path="/my-tracks" element={<MyTracksScreen/>}/>
					<Route path="/collection" element={<CollectionScreen/>}/>
				</Route>

				<Route path="*" element={<NotFound/>}/>
			</Routes>

	)
}

