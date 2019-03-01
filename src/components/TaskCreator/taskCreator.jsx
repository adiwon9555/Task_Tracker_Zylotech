import React, { Component } from "react";
import PropTypes from 'prop-types';
import './taskCreator.css'
// import TimePicker from 'react-time-picker';
// import TimePicker from 'react-time-picker/dist/entry.nostyle';
import DatePicker from "react-datepicker";
// import TimePicker from 'rc-time-picker';

import "react-datepicker/dist/react-datepicker.css";

class TaskCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    onSubmit(e) {
        e.preventDefault();
        var data = {
            taskName: this.refs.taskName.value,
            taskDes: this.refs.taskDes.value,
            taskDate: this.state.startDate.getTime()
        }
        this.props.addTask(data);
        this.refs.taskName.value = '';
        this.refs.taskDes.value = '';
        this.setState({
            startDate: new Date()
        });


    }

    render() {
        // const { activeChannel } = this.props;
        return (

            <div className="a">
                <h1 className="text-center">Task Creator</h1>
                <form onSubmit={this.onSubmit.bind(this)} style={{ marginTop: "7%", fontSize: "160%" }}>
                    <div className="form-group">
                        <label >Task Name</label>
                        <input autoFocus type="text" className="form-control" id="name" placeholder="Enter Task" ref="taskName" required />
                    </div>
                    <div className="form-group">
                        <label >Task Description</label>
                        <input type="text" className="form-control" id="Description" placeholder="Enter Description" ref="taskDes" />
                    </div>
                    <div className="form-group">
                        <label >Set Date-Time</label>
                        <div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                showTimeSelect
                                minDate={new Date()}
                                // timeFormat="HH:mm"
                                timeIntervals={1}
                                dateFormat="MMM d, yyyy h:mm aa"
                                timeCaption="Time"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

TaskCreator.propTypes = {
    // messages: PropTypes.array.isRequired,
    addTask: PropTypes.func.isRequired
}

export default TaskCreator;