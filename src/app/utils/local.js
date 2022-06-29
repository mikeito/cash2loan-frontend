export const storage = {
    getToken: () => JSON.parse(window.localStorage.getItem("token")),
    setToken: (token) => window.localStorage.setItem("token", JSON.stringify(token)),
    clearToken: () => window.localStorage.removeItem("token"),

    getRefreshToken: () => JSON.parse(window.localStorage.getItem("refresh_token")),
    setRefreshToken: (refresh_token) => window.localStorage.setItem("refresh_token", JSON.stringify(refresh_token)),
    clearRefreshToken: () => window.localStorage.removeItem("refresh_token"),
};