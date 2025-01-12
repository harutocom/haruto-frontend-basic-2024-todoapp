import React, { useState } from "react";
import check from "../../../assets/svg/check.svg"

// export const Img = () => {
//     return <img src={check}></img>;
// }

export const Checkbox = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return <button
    onClick={props.onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        border: "2px solid #B8B8B8",
        borderRadius: 2,
        backgroundImage: isHovered
        ? `url(${check})`
        : "none",
        backgroundSize: "cover"
    }}
    ></button>
}