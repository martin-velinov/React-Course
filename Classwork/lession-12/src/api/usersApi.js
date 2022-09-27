import { api } from "../config/properties"

export const getUsers = () => {
    return fetch(`${api.root}/users`)
        .then(res => res.json())
        .then(json => Promise.resolve(json)) 
        .catch(err => Promise.reject(err))
} 

export const deleteUser = (userId) => {
    return fetch(`${api.root}/users/${userId}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>Promise.resolve(userId)) 
        .catch(err=>Promise.reject(err))
}