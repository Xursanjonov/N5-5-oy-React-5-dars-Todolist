import React from 'react'

const Buttun = ({ id, className, onClick, children, disabled, type = "button", }) => {
    return <button id={id} disabled={disabled} className={className + " btn"} onClick={onClick} type={type} > {children} </button>
};
export default Buttun