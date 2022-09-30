import {Route, Routes} from "react-router-dom";
import React from "react";
import {NotFound} from "./pages/not-found";
import {MainScreen} from "./pages/main";
import {ProtectedRoute} from "./components/protected-route"
import {Login} from "./pages/login";
import {MyTracksScreen} from "./pages/my-tracks/MyTracksScreen"
import {CollectionScreen} from "./pages/collection/CollectionScreen"

export function AppRoutes() {
	localStorage.setItem('isLogin', '0')


	return (
		<Routes>
			<Route path="/" element={<Login/>}/>
			<Route element={<ProtectedRoute redirectPath={'/'} isAllowed={!!localStorage.getItem('isLogin')}/>}>
				<Route path="/main" element={<MainScreen/>}/>
				<Route path="/my-tracks" element={<MyTracksScreen/>}/>
				<Route path="/collection" element={<CollectionScreen/>}/>
			</Route>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}