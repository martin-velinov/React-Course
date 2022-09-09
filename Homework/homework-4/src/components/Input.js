import React from 'react'
import PropTypes from 'prop-types';
import '../css/Style.css'
export const Input = ({type,placeholder,value,onChange,name,changeInput,showTextarea}) =>{


  return (
    <>
      <p>
        {showTextarea ? 
        <textarea 
        rows={10} 
        cols={25} 
        value={value}
        onChange={onChange}
        />
        :
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        />
        }

        
        {name === "password" ? <button type="button" onClick={changeInput} className="eye-button">
          <i className={"fa " + (type === "password" ? "fa-eye-slash" : "fa-eye")}></i></button> : null}
        
        {name === "message" && <button type="button" onClick={changeInput} className="msg-button">
          <i className='fa fa-comments-o'></i>
        </button>}

        </p>
      
    </>
  )
}


Input.propTypes={
type:PropTypes.string,
placeholder:PropTypes.string,
value:PropTypes.string,
onChange:PropTypes.func,
name:PropTypes.string,
changeInput:PropTypes.func,
showTextarea:PropTypes.bool,


}