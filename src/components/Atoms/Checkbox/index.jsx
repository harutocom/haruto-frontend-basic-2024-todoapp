import React from "react";
import  "./Checkbox.css"

export const Checkbox = (props) => {
    return <button
    onClick={props.onClick}
    className="checkbox"
    ></button>
}