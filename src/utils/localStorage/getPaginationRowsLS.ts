export const getPaginationRowsLS = () => {
    const data = localStorage.getItem('paginationRows')
    return data ? JSON.parse(data) : 10
}