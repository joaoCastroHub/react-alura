import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {

    const onTyped = (event) => {
        props.onChanged(event.target.value);
    }

    return (
        < div className="text-field">
            <label>{props.label}</label>
            <input value={props.inputValue} onChange={onTyped} required={props.fieldRequired} placeholder={props.placeholder} />
        </div >
    )
}

export default TextField; 