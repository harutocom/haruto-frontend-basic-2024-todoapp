import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import COLOR from "../../../variables/color";

const Input = ({ onEditComplete, defaultValue }) => {
    const InputRef = useRef();

    useEffect(() => {
        InputRef.current.focus();
    },[])

  return <StyledInput defaultValue={defaultValue || ''} ref={InputRef}/>
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