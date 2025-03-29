import React from "react";
import check from "../../../assets/svg/check.svg"
import styled from 'styled-components';
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
    return <StyledCheckbox onClick={onClick}/>
}

const StyledCheckbox = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 2px solid ${COLOR.LIGHT_GRAY};
    border-radius: 2px;
    &:hover{
        background-image: url(${check});
        background-size: cover;
        cursor: pointer;
    }
`