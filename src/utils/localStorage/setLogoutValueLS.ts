export const setLogoutValueLS = () => {
    const data = localStorage.getItem('setLogoutValue')
    return data ? JSON.parse(data) : false
}