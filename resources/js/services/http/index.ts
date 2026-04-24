import axios from "axios";

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application.json'
    }
});

export const getRequest = (endpoint:any) => http.get(endpoint);
export const postRequest = (endpoint:any, data:any) => http.post(endpoint, data);
export const putRequest = (endpoint:any, data:any) => http.put(endpoint, data);
export const deleteRequest = (endpoint:any) => http.delete(endpoint);
