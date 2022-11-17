import axios from "axios";
import {BASE_URL} from "../store/store";
import {getCookie} from "../lib/cookieReader";
import {fetchCreateToken} from "../store/actions/thunks/token";
import {fetchCreateTokenSuccess} from "../store/actions/creators/token";


let store

export const injectStore = (_store) => {
	store = _store
}


const refreshToken = getCookie('refresh')

const $api = axios.create({
	baseURL: BASE_URL,
	headers:{
		'Content-Type': 'application/json'
	},
})

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${store.getState().login.accessToken}`
	return config
})

$api.interceptors.response.use((config) => {
	return config
}, async (error) => {
	const originalRequest = error.config
	if (error.response.status === 401 && error.config && !originalRequest.isRetry) {
		originalRequest.isRetry = true
		try {
			const response = await axios.post(`${BASE_URL}/user/token/refresh/`, {"refresh": refreshToken})
			store.getState().dispatch(fetchCreateTokenSuccess(response.data.access))
		} catch (e) {
			console.log(e)
			console.log(refreshToken)
		}
	}
	throw error
})


export default $api