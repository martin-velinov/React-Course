import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({options,changeOption}) => {

    return(
        <p>
            <label htmlFor="dropdown">Select social media</label>
            <select onChange={changeOption} id="dropdown" name="dropdown">
                    {options.map((option,i)=>{
                        return(
                            <option key={i} value={option.value}>{option.name}</option>
                        )
                    })}
            </select>
        </p>
    )
}

Dropdown.propTypes={
    changeOption:PropTypes.func,
    options:PropTypes.array
}