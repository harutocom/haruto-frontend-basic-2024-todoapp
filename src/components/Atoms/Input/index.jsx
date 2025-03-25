import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

const Input = ({ onEditComplete, defaultValue }) => {
    const InputRef = useRef();
    const handleBlur = () => {
        onEditComplete(InputRef.current.value);
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            onEditComplete(InputRef.current.value);
        }
    }

    useEffect(() => {
        InputRef.current.focus();
    },[])

  return <StyledInput 
    defaultValue={defaultValue || ''} 
    ref={InputRef} 
    onBlur={handleBlur}
    onKeyDown={handleKeyDown}/>
}

const StyledInput = styled.input`
    box-sizing: border-box;
    display: flex;
    padding: 0 4px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: ${COLOR.LIGHT_GRAY};
    font-size: 14px;
    font-weight: 500;
    font-family: ${FONTFAMILY.NOTO_SANS};
    background-color: ${COLOR.BLACK};
    border: none;
    border-radius: 2px;
    outline: none;
`

export default Input