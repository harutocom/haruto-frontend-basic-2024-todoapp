import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import "./EditButton.css"

export const Img = () => {
  return <img src={pencil}
  width={20}
  height={20}
  />;
}

export const SampleButton = (props) => {
    return <button
    onClick={props.onClick}
    className="EditButton"
    ><Img></Img>{props.label}</button>;
}
  