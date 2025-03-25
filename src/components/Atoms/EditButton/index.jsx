import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from 'styled-components';
import COLOR from "../../../variables/color";


export const Img = () => {
  return <img src={pencil}
  width={20}
  height={20}
  />;
}

export const EditButton = ({ onClick, label }) => {
    return <StyledButton
    onClick={onClick}
    className="EditButton"
    ><Img/>{label}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 0;
  display: flex;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  position: relative;
  cursor: pointer;
  &:hover{
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`

export default EditButton;
