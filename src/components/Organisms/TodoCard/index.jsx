import {React, useState} from 'react'
import styled from 'styled-components';
import {AddTaskButton} from '../../Atoms/AddTaskButton/index';
import Task from '../../Molecules/Task';

const TodoCard = () => {
    const [taskList, setTaskList] = useState([]);

    const onAddTaskButtonClick = () => {
        const newItem = {name:'', initializing:true}
        setTaskList(prev => [...prev, newItem])
    }

    const onTaskComplete = ( index ) => {
        const newTaskList = taskList.filter((_, i) => i !== index);
        setTaskList(newTaskList)
    }

    const onTaskNameChange = (value, index) => {
        if (value === ''){
            onTaskComplete(index)
        }else{
            const newTaskList = [...taskList];
            newTaskList[index].name = value;
            setTaskList(newTaskList);
        }
    }

  return (
    <StyledWrapper>
        <AddTaskButton onClick={onAddTaskButtonClick}/>
            <StyledTaskList>
                {taskList.map((task,index) =>(
                    <Task 
                    key={index} 
                    taskName={task.name} 
                    defaultEditing={task.initializing} 
                    onTaskComplete={() => onTaskComplete(index)}
                    onTaskNameChange={(value) => onTaskNameChange(value, index)}/>
                ))}
            </StyledTaskList>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    
`

const StyledTaskList = styled.div`
    
`

export default TodoCard;