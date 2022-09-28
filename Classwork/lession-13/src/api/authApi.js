import { properties } from "../config/properties";

export const LogInUser = (email,password) => {
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
        }
    };
    var data={email:email,password:password}
    return fetch(`${properties.api.localRoute}/login`,{method:"POST",headers:config.header,body:JSON.stringify(data)})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}