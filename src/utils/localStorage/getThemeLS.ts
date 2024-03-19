export const getThemeLS = () => {
  const data = localStorage.getItem('themeChecked')
    return data ? JSON.parse(data) : false
}