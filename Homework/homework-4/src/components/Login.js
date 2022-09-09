import React,{useState} from 'react'
import {Input} from './Input'
import {Dropdown} from './Dropdown'

import '../css/Style.css'

export function Login() {

    //state Input
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [fieldType,setFieldType] = useState("password")
    const [longMessage,setLongMessage] = useState(false);
    const [message,setMessage] = useState('');

    //state Dropdown
    const [selectedApp,setSelectedApp]= useState('');

    let options =[
        {value:"Facebook",name:"Facebook"},
        {value:"Instagram",name:"Instagram"},
        {value:"SnapChat",name:"SnapChat"}
    ]

    function handleSubmit(event){
        event.preventDefault()
        alert(`App choosed: ${selectedApp}\n Username: ${username}\n Password: ${password}\n Message: ${message}`)
    }

    function changeInput(){
        setFieldType(
            fieldType === "password" ? "text" : "password"
        )
    }
  
    
    return (
    <div id="login">
        <form onSubmit={handleSubmit} action="">

            <h2>Sign up form</h2>
            <Dropdown options={options} changeOption={(e)=>{setSelectedApp(e.target.value)}}/>
            
            <label htmlFor="username">Username</label>
            <Input
            type="text"
            placeholder={'Enter Username'}
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />

            <label htmlFor="email">Email</label>
            <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />

            <label htmlFor="password">Password</label>
            <Input
            type={fieldType}
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            changeInput={changeInput}
            />

            <label htmlFor="message">Message</label>
            <Input 
                type="text"
                placeholder={"Enter Message"}
                name="message"
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
                showTextarea = {longMessage}
                changeInput={()=>{setLongMessage(!longMessage)}}
                

                />
            <button className="submit-btn">Sign in</button>
        </form>

         
    </div>
  )
}

