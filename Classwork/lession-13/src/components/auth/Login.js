import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {logIn} from '../redux/ducks/auth';
import operations from './duck/operations';

export const Login = (props) => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
        
    });
    const navigate = useNavigate();
   const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await dispatch(operations.logIn(email,password))
            navigate("/users")
        }
        catch(err){
            alert(err)
        }
    }

    const {email, password} = loginData;

    return(
       
            <div style={{
                margin: 'auto',
                width: '15%',
                padding: '10px',
                marginTop:'15%'
              }} className='login-form'>
            

                <form className='log-in' onSubmit={handleLogin}>

                <div className="col span-1-of-2">

                <label className='label'>Email</label><br/>
                <input 
                type="text" 
                id='email' 
                className='form-control' 
                placeholder='user@domain.com' 
                value={email} 
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}>
                </input>
                <br/>

                <label className='label'>Password</label><br/>
                <input 
                type="password" 
                id='password' 
                className='form-control' 
                placeholder='******' 
                value={password} 
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}>
                </input>  
                <br/>

                <button className="btn-lgn" type="submit">Login</button>

                </div>
                
                </form>
             </div>

    )
}

export default Login;