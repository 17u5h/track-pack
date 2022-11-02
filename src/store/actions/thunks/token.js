import {
	fetchValidateUserStarted,
	fetchValidateUserSuccess,
	fetchValidateUserFailure,
	fetchCreateTokenStarted,
	fetchCreateTokenSuccess,
	fetchCreateTokenFailure
} from "../creators/token";
import axios from "axios";

const BASE_URL = 'http://51.250.95.23:8000/'

export const fetchCreateToken = (user) => async (dispatch) => {
	dispatch(fetchCreateTokenStarted())

	try {
		const {data} = await axios.post(`${BASE_URL}/user/token/`, user)
		const accessToken = data.access
		const refreshToken = data.refresh

		dispatch(fetchCreateTokenSuccess(accessToken))
	}
	catch (error) {
		dispatch(fetchCreateTokenFailure(error))
	}
}

export const fetchValidateLogin = (login, password) => async (dispatch) => {
	dispatch(fetchValidateUserStarted())

	try {
		const {data} = await axios.post(BASE_URL, {login, password})

		dispatch(fetchValidateUserSuccess(data))
	} catch (error) {
		dispatch(fetchValidateUserFailure(error))
	}
}
