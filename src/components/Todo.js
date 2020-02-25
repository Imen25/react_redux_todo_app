import React from "react";

const Todo = props => {
  return (
    <div className="item_list_g">
      <div className="item_list">
        {!props.isCompleted ? (
          <i
            className="far fa-circle"
            onClick={() => props.onCheck(props.id)}
          />
        ) : (
          <i
            className="far fa-check-circle"
            style={{ color: "#84443abd" }}
            onClick={() => props.onCheck(props.id)}
          />
        )}
        {!props.isCompleted ? (
          <span>{props.todo}</span>
        ) : (
          <span style={{ color: "#84443abd" }}>{props.todo}</span>
        )}
      </div>
      <i
        className="far fa-trash-alt"
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  );
};

export default Todo;
