import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const loginUser = (email, password) => {
    return axios.post(`${BASE_URL}/api/auth/login`, {
        email,
        password
    });
};