import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg"
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Img = () => {
    return <StyledImg src={plus}/>;
}

export const AddTaskButton = ({ onClick }) => {
    return (
    <StyledAddTaskButton onClick={onClick}>
        <Img/>
        <StyledText>タスクを追加</StyledText>
    </StyledAddTaskButton>
    );
}

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`

const StyledAddTaskButton = styled.button`
    padding: 2px 6px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    background-color: ${COLOR.GREEN_TRANSPARENT};
    border: none;
    gap: 10px;
    transition: 0.2s;
    &:hover{
        background-color: ${COLOR.GREEN_TRANSLUCENT};
    }
`

const StyledText = styled.div`
    color: ${COLOR.GREEN};
    ${TEXT.S}
    font-family: ${FONTFAMILY.NOTO_SANS};
`; 
