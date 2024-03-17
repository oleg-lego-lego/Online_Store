export const getLoginUser = () => {
    const data = localStorage.getItem('getLoginUser')
    return data ? JSON.parse(data) : []
}