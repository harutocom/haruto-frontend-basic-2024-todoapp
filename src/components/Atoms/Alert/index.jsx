import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const Alert = () => {
  const { errorText, visible } = useAlertHandlerContext();
  return (
    <StyledWrapper visible={visible}>
      <StyledAlert>{errorText}</StyledAlert>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  transform: ${(props) =>
    props.visible ? "translate(-50%, 40%)" : "translate(-50%, 0%)"};
  top: 100px;
  left: 50%;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: 0.5s ease-in-out;
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
