import Cookies from 'js-cookie'
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/',
    withCredentials: true,
});

export const fetchCsrfToken = async () => {
    const res = await api.get('/api/csrf/');
    const token = res.data.csrfToken
    Cookies.set("csrftoken", token)
};

api.interceptors.request.use((config) => {
    const csrfToken = Cookies.get('csrftoken');

    // axios method can sometimes be uppercase/null
    const method = config.method?.toLowerCase();

    if (
        csrfToken &&
        csrfToken !== "undefined" &&
        ["post", "put", "patch", "delete"].includes(method)
    ) {
        config.headers["X-CSRFToken"] = csrfToken;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {

        if (error.response) {
            const status = error.response.status;

            switch (status) {

                case 403:
                    console.error("403 CSRF/Auth Error:", error.response.data);
                    break;

                case 401:
                    console.error("401 Unauthorized:", error.response.data);
                    break;

                case 500:
                    console.error("500 Server Error:", error.response.data);
                    break;

                default:
                    console.error(`${status} Error:`, error.response.data);
            }

        } else {
            console.error("Network error:", error);
        }

        return Promise.reject(error);
    }
);

export default api;