import React from 'react';
import Form from './components/TodoForm';
import './App.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  // * add task
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      todo: task,
      id: Date.now(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTask] });
  };
  // * edit task

  // * remove task
  removeTask = e => {
    let checker = new Set(
      this.state.todos.map(data => data.completed === true)
    );
    console.log(checker);
    if (checker.has(true)) {
      this.setState({
        todos: this.state.todos.filter(task => !task.completed)
      });
    } else {
      alert('no items to complete');
    }
  };

  // * complete task
  completed = taskId => {
    console.log(taskId);
    this.setState({
      todos: this.state.todos.map(task => {
        console.log(taskId, task.id);
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  render() {
    console.log('todo', this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.todos.length > 0 ? (
          <button onClick={this.removeTask}>Clear Completed</button>
        ) : null}
        <Form addTask={this.addTask} />
        {this.state.todos.length > 0 ? (
          this.state.todos.map((data, id) => {
            return (
              <div key={id} className="taskList">
                <h3
                  className={data.completed ? 'completed' : 'todo'}
                  onClick={() => this.completed(data.id)}
                  data={data}
                >
                  {data.todo}
                </h3>
                {data.completed ? (
                  <span role="img" aria-label="check-mark">
                    ✅
                  </span>
                ) : null}
              </div>
            );
          })
        ) : (
          <h1>Add a task</h1>
        )}
      </div>
    );
  }
}

export default App;
