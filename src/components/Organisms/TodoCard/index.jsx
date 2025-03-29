import {React, useState} from 'react'
import styled from 'styled-components';
import AddTaskButton from '../../Atoms/AddTaskButton/index';
import Task from '../../Molecules/Task';

const TodoCard = () => {
    const [taskList, setTaskList] = useState([]);
  return (
    <StyledWrapper>
        <AddTaskButton>
            <StyledTaskList>
                {taskList.map((task,index) =>{
                    <Task />
                })}
            </StyledTaskList>
        </AddTaskButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    
`

const StyledTaskList = styled.div`
    
`

export default TodoCard;