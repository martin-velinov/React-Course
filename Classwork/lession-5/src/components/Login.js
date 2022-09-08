import React,{useState} from 'react'
import {Input} from './Input'


export function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [fieldType,setFieldType] = useState("password")
  
    function changeInput(){
        setFieldType(
            fieldType === "password" ? "text" : "password"
        )
    }

    function handleSubmit(event){
        event.preventDefault()
        alert(`username: ${username} password:${password}`)
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <Input
            type="text"
            placeholder={'enter usernmae'}
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <Input
            type={fieldType}
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            changeInput={changeInput}
            />
            <button>Sign in</button>
        </form>
    </div>
  )
}

