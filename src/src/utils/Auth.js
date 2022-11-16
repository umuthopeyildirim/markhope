const isUserAuthenticated = () => {
    return localStorage.getItem('auth_token') ? true : false;
}

const logoutUser = () => {
    localStorage.removeItem('auth_token');
    window.location.href = "/login";
}
export { isUserAuthenticated, logoutUser };