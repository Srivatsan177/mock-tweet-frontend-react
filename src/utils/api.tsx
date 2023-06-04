import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
})

axiosInstance.interceptors.request.use((config) => {
    config["headers"] = {...config["headers"], "Authorization": Cookies.get("jwt")}
    return config
});

export async function get(path: string) {
    const response = await axiosInstance.get(path)
    return response.data;
}

export async function post(path: string, data: any) {
    const response = await axiosInstance.post(path, data)
    return response.data
}

export async function signin(username: string, password: string) {
    try{
        const response = await axiosInstance.post("/users/signin", {username, password})
        Cookies.set("jwt", response.data.jwt)
        return true     
    } catch (error) {
        console.log(error)
        return false
    }
}