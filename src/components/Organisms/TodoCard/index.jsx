import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState(() => {
    const savedTaskList = localStorage.getItem("savedTaskList");
    return savedTaskList ? JSON.parse(savedTaskList) : [];
  });

  const onAddTaskButtonClick = () => {
    const newItem = { name: "", initializing: true };
    setTaskList((prev) => [...prev, newItem]);
  };

  const onTaskComplete = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      onTaskComplete(index);
    } else {
      const newTaskList = [...taskList];
      newTaskList[index].name = value;
      setTaskList(newTaskList);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedTaskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            taskName={task.name}
            defaultEditing={task.initializing}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;

const StyledTaskList = styled.div`
  > * {
    margin-top: 10px;
  }
`;

export default TodoCard;
