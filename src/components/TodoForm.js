import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ task: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            name="todo"
            value={this.state.task}
            onChange={this.changeHandler}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
