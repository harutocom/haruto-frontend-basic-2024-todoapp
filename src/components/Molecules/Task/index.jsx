import React, {useState} from 'react'
import Checkbox from '../../Atoms/Checkbox/index.jsx';
import Input from '../../Atoms/Input/index.jsx';
import EditButton from '../../Atoms/EditButton/index.jsx';
import styled from 'styled-components';
import COLOR from '../../../variables/color.js';
import FONTFAMILY from '../../../variables/font_family.js';

const Task = ({ onTaskNameChange, onTaskComplete, taskName, defaultEditing }) => {
    const [isEditing, setIsEditing] = useState(defaultEditing);

    const onEditComplete = (value) => {
        setIsEditing(false);
        onTaskNameChange(value)
    }

    const onEditButtonClick = () => {
        setIsEditing(true);
    }
  return (
    <StyledWrapper> 
        <StyledCheckboxWrapper>
            <Checkbox onClick={onTaskComplete}/>
        </StyledCheckboxWrapper>
        {isEditing ? (<Input onEditComplete={onEditComplete} defaultValue={taskName}/>) 
        : (
            <StyledNameAndButtonWrapper>
                <StyledTaskName>
                    {taskName}
                </StyledTaskName>
                <StyledEditButtonWrapper>
                    <EditButton onClick={onEditButtonClick}/>
                </StyledEditButtonWrapper>
            </StyledNameAndButtonWrapper>
        )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    display: flex;
`
const StyledCheckboxWrapper = styled.div`
    
`
const StyledNameAndButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const StyledTaskName = styled.div`
    line-height: 20px;
    color: ${COLOR.LIGHT_GRAY};
    font-size: 14px;
    font-weight: 500;
    font-family: ${FONTFAMILY.NOTO_SANS};
`
const StyledEditButtonWrapper = styled.div`
margin-left: auto;
`

export default Task;