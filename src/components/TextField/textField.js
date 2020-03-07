import React from 'react'
import './textField.css'

const TextField = props => {
    return (
        <div className="textContainer">
            <input name={props.name} type={props.type} className="textInput" placeholder={props.placeholder}
                   value={props.value}
                   onChange={(value)=>{props.onChange(value)}
                   }/>
        </div>
    )
}

export  {TextField}
