import {
	fetchCreateTokenStarted,
	fetchCreateTokenSuccess,
	fetchCreateTokenFailure
} from "../creators/token";
import axios from "axios";
import {BASE_URL} from "../../store";



export const fetchCreateToken = (user) => async (dispatch) => {
	dispatch(fetchCreateTokenStarted())

	try {
		const {data} = await axios.post(`${BASE_URL}/user/token/`, user)
		const accessToken = data.access
		const refreshToken = data.refresh
		document.cookie = `refreshToken = ${refreshToken}`
		dispatch(fetchCreateTokenSuccess(accessToken))
	}
	catch (error) {
		dispatch(fetchCreateTokenFailure(error))
	}
}

