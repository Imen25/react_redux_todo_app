import React from "react";
import { connect } from "react-redux";
import { addTODO } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTODO: todo => dispatch(addTODO(todo))
  };
}

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { todo } = this.state;
    this.props.addTODO({ todo, isCompleted: false, id: Date.now() });
    this.setState({ todo: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="enter new task"
            value={this.state.todo}
          />
          <br />
          <i
            className="fas fa-plus-circle btn-add"
            style={{ marginLeft: "58%", fontSize: "25px" }}
            onClick={this.handleSubmit}
          ></i>
        </div>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
