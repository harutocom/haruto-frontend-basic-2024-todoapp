import styled from "styled-components";
import React, { useState } from "react";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg"
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Img = () => {
    return <img src={plus} style={{
        width: 20,
        height: 20
    }} />;
}

export const AddTaskButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return <button 
    onClick={props.onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
        padding: "2px 6px",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        border: "none",
        gap: 10,
        backgroundColor: isHovered ? `${COLOR.GREEN_TRANSLUCENT}` : `${COLOR.GREEN_TRANSPARENT}`,
        transition: "0.2s"
    }}
    ><Img></Img>
    <StyledText>タスクを追加</StyledText>
    </button>;
}

const StyledText = styled.div`
    color: ${COLOR.GREEN};
    ${TEXT.S}
    font-family: ${FONTFAMILY.NOTO_SANS};
`; 
