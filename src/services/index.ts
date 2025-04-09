import axios from "axios";
const BASEURL = `http://localhost:9000`


export const userAuthRegister = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/api/register`, payload);
    return response?.data
}

export const userAuthLogin = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/login`, payload);
    return response?.data
}
