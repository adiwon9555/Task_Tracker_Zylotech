import React, { Component } from "react";
import PropTypes from 'prop-types';
import './taskViewer.css'

class TaskViewer extends Component {

    render() {
        const { tasks } = this.props;
        
        return (
            <div>
                <div style={{ marginTop: "5%" }}>
                    <button className="btn btn-warning " onClick={this.props.getUpcomingTasks.bind(this)}>Upcoming</button>
                    <button className="btn btn-success" onClick={this.props.getAllTasks.bind(this)} style={{ float: "right" }}>All</button>

                </div>
                <ul className="list-group" style={{marginTop:"5%"}}>
                    {tasks.map((task,i) => {
                         return <li key={i} className="list-group-item" >
                            <div>
                                <strong className="tName">{task.taskName}</strong>
                                <i className="timestamp">{new Date(task.taskDate).toLocaleString()}</i>
                            </div>
                            <div className="des">
                                {task.taskDes}
                            </div>
                        </li>
                    })
                    }

                </ul>
            </div>
        )
    }
}

TaskViewer.propTypes = {
    // tasks: PropTypes.array.isRequired,
    getAllTasks: PropTypes.func.isRequired,
    getUpcomingTasks: PropTypes.func.isRequired
}

export default TaskViewer;