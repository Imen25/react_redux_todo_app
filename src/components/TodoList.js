import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { deleteTODO, checkTODO } from "../actions/index";

const mapStateToProps = state => {
  return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
  return {
    deleteTODO: id => dispatch(deleteTODO(id)),
    checkTODO: id => dispatch(checkTODO(id))
  };
}

class ConnectedList extends React.Component {
  onDelete = id => {
    this.props.deleteTODO(id);
  };
  onCheck = id => {
    this.props.checkTODO(id);
  };
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, i) => (
          <Todo
            key={i}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            onDelete={this.onDelete}
            onCheck={this.onCheck}
          />
        ))}
      </div>
    );
  }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default TodoList;
