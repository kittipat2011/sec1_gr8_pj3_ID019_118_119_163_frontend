import axios from 'axios';

//Get method
//get All User
export const getAllUsers = () => {
    return axios.get('http://localhost:3001/user');
}
//Get user by ID
export const getUserById = (id) => {
    return axios.get('http://localhost:3001/user/'+id);
}
//get user by Username
export const getUserByUsername = (Username) => {
    return axios.get('http://localhost:3001/user/'+Username);
}
// Post Method
// User Login
export const userLogin = (login) => {
    return axios.post("http://localhost:3001/user/login", login);
}
// Add User
export const addUser = (user) => {
    return axios.post('http://localhost:3001/user/add',user);
}
// Put Method
// Update User
export const updateUser = (user) => {
    return axios.put('http://localhost:3001/user/update',user);
}
// Delete Method
// Delete User
export const deleteUser = (id) => {
    return axios.delete('http://localhost:3001/user/delete/'+id);
}