import React from 'react'
import PropTypes from 'prop-types';

export const Input = ({type,placeholder,value,onChange,name,changeInput}) =>{


  return (
    <p>
        <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        />

        {name=== 'password' && 
        <button type='button' onClick={changeInput}><i className={type==='password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i></button>}
    </p>
  )
}


Input.propTypes={
type:PropTypes.string,
placeholder:PropTypes.string,
value:PropTypes.string,
onChange:PropTypes.func,
name:PropTypes.string,
changeInput:PropTypes.func
}