import axios from "axios";
import {BASE_URL} from "../store/store";
import {useSelector} from "react-redux";
import {tokenSelector} from "../store/selectors/loginSelector";

const token = useSelector(tokenSelector)

const $api = axios.create({
	baseURL: BASE_URL
})

$api.interceptors.request.use((config) => {
		config.headers!.Authorization = `Bearer ${token}`
	return config
})

export default $api