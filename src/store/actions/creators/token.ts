import {
	GET_TOKEN_FAILURE,
	GET_TOKEN_STARTED,
	GET_TOKEN_SUCCESS,
	VALIDATE_USER_FAILURE,
	VALIDATE_USER_STARTED,
	VALIDATE_USER_SUCCESS
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

export const fetchValidateUserStarted = () => ({
	type: VALIDATE_USER_STARTED
})

export const fetchValidateUserSuccess = (token: types) => ({
	type: VALIDATE_USER_SUCCESS,
	payload: {
		token
	}
})

export const fetchValidateUserFailure = (error: unknown) => ({
	type: VALIDATE_USER_FAILURE,
	payload: {
		error
	}
})