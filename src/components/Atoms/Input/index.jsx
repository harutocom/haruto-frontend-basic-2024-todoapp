import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import COLOR from "../../../variables/color";

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
    padding: 0 4px;
    width: 100%;
    height: 20px;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.BLACK};
    border: none;
    outline: none;
`

export default Input