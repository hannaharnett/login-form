// return user data from storage
export const getUser = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null; 
}
 
// return token
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove token and user from storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}
 
// set token and user from storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}