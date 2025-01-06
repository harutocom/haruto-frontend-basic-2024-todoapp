import React from "react";
import plus from "../../../assets/svg/plus"

export const Img = () => {
    return <img src={plus} alt="" />;
}

export const AddTaskButton = (props) => {
    return <button onClick={props.onClick}><Img></Img>タスクを追加</button>;
}