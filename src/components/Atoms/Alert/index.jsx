import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = () => {
  return (
    <StyledWrapper>
      <StyledAlert>index</StyledAlert>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAlert = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  max-width: 400px;
  width: 100%;
  height: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  border-radius: 4px;
  ${TEXT.S}
`;

export default Alert;
