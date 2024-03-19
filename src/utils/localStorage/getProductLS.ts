export const getProductLS = () => {
    const data = localStorage.getItem('ProductChecked')
    return data ? JSON.parse(data) : {}
}