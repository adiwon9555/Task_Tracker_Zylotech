import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCreator from './components/TaskCreator/taskCreator.jsx'
import TaskViewer from './components/TaskViewer/taskViewer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentDidMount() {

    this.getUpcomingTasks()

  }
  addTask(data) {
    var tasks = this.state.tasks;
    tasks.push(data)
    var stasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', stasks);
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
    this.getUpcomingTasks()
  }
  getAllTasks() {
    var stasks = localStorage.getItem('tasks');
    if (stasks != null) {
      var tasks = JSON.parse(stasks)
      tasks.sort(function (a, b) { return a.taskDate - b.taskDate });
      this.setState({
        tasks
      })
    }

  }
  getUpcomingTasks() {
    var stasks = localStorage.getItem('tasks');
    if (stasks != null) {
      var tasks = JSON.parse(stasks)
      tasks.sort(function (a, b) { return a.taskDate - b.taskDate });
      tasks = tasks.filter((t, i) => {
        if (i < 3) {
          return true
        } else {
          return false
        }
      })
      this.setState({
        tasks
      })
    }

  }
  render() {
    return (

      <div className='container'>
        <div className='row'>
          <div className="col-xs-9 border">
            <TaskCreator {...this.state}
              addTask={this.addTask.bind(this)}
            />
          </div>
          <div className="col-xs-3">
            <TaskViewer
              {...this.state}
              getAllTasks={this.getAllTasks.bind(this)}
              getUpcomingTasks={this.getUpcomingTasks.bind(this)}
            />

          </div>
        </div>
        <div id="snackbar">Task Successfully added</div>
      </div>
    );
  }
}

export default App;
