import {
	GET_TOKEN_FAILURE,
	GET_TOKEN_STARTED,
	GET_TOKEN_SUCCESS,
} from "../types/types";


type types ={
	accessToken: string,
}

export const fetchCreateTokenStarted = () => ({
	type: GET_TOKEN_STARTED
})

export const fetchCreateTokenSuccess = (accessToken: types) => ({
	type: GET_TOKEN_SUCCESS,
	payload: {
		accessToken
	}
})

export const fetchCreateTokenFailure = (error: unknown) => ({
	type: GET_TOKEN_FAILURE,
	payload: {
		error
	}
})
