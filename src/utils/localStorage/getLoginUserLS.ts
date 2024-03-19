export const getLoginUserLS = () => {
    const data = localStorage.getItem('getLoginUserLS')
    return data ? JSON.parse(data) : []
}