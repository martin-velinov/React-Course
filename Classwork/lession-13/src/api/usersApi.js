import { properties } from './../config/properties';

export const getUsers = () => {
    debugger;
    return fetch(`${properties.api.root}/users`)
        .then(res =>  res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}