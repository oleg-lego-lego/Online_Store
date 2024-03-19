export const getRegisteredUserLS = () => {
    const data = localStorage.getItem('registerUser')
    return data ? JSON.parse(data) : ''
}