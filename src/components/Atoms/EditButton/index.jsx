import React from "react";
import pencil from "../../../assets/svg/pencil.svg";

export const Img = () => {
  return <img src={pencil}/>;
}

export const SampleButton = (props) => {
    return <button onClick={props.onClick}><Img></Img>{props.label}</button>;
}
  