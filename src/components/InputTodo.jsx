import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div className={"input-area"}>
      <input value={todoText} placeholder={"TODOを入力"} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
