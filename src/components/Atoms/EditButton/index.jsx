import React, {useState} from "react";
import pencil from "../../../assets/svg/pencil.svg";

export const Img = () => {
  return <img src={pencil}
  width={20}
  height={20}
  />;
}

export const SampleButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
    return <button
    onClick={props.onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="EditButton"
    style={{
      padding: 0,
      width: 20,
      height: 20,
      backgroundColor: isHovered
      ? "rgba(184,184,184,0.2)"
      : "transparent",
      border: "none",
      borderRadius: 50,
      position: "relative"
    }}
    ><Img></Img>{props.label}</button>;
}