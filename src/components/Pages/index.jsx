import React from "react";
import TodoCard from "../Organisms/TodoCard";
import { Title } from "../Atoms/Title";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <Title />
      </StyledTitleWrapper>
      <StyledTodoCardWrapper>
        <TodoCard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 60px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledTitleWrapper = styled.div`
  text-align: center;
`;

const StyledTodoCardWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export default MainPage;
