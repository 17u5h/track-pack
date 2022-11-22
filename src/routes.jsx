import {Route, Routes} from "react-router-dom";
import React from "react";
import {NotFound} from "./pages/not-found";
import {MainScreen} from "./pages/main/MainScreen";
import {ProtectedRoute} from "./components/protected-route"
import {Login} from "./pages/login/index";
import {MyTracksScreen} from "./pages/my-tracks/MyTracksScreen"
import {Registration} from "./pages/login/registration";
import {useSelector} from "react-redux";
import {tokenSelector} from "./store/selectors/loginSelector";
import {Layout} from "./components/Layout";
import {CollectionScreen} from "./pages/collection/CollectionScreen";

export function AppRoutes() {
	const token = useSelector(tokenSelector)



	return (

			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/registration" element={<Registration/>}/>
					<Route element={<ProtectedRoute redirectPath={'/'} isAllowed={Boolean(token)}/>}>
						<Route path="/" element={<Layout/>}>
							<Route path="main" element={<MainScreen/>}/>
							<Route path="my-tracks" element={<MyTracksScreen/>}/>
							<Route path="daily-playlist" element={<CollectionScreen id={1} title='Плейлист дня'/>}/>
							<Route path="100-dance-hits" element={<CollectionScreen id={2} title='100 танцевальных хитов'/>}/>
							<Route path="indy-charge" element={<CollectionScreen id={3} title='Инди-заряд'/>}/>
						</Route>
					</Route>

				<Route path="*" element={<NotFound/>}/>
			</Routes>

	)
}

