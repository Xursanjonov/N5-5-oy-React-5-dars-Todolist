import React from 'react'

const Input = ({ label, onChange, value, id, placeholder, type }) => {
    return (
        <div>
            {label ? <label htmlFor={id}>{label}</label> : ""}
            <input required type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input