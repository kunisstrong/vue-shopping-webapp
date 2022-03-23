// 向外暴露一个函数
// 存储token
export const setToken = (token) => {
  localStorage.setItem('TOKEN', token)
}
// 清楚本地存储的token
export const removeToken = () => {
  localStorage.removeItem('TOKEN')
}
