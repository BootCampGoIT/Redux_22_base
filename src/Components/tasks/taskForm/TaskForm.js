import React, { Component } from 'react';
import css from './TaskForm.module.css';
import HOC from '../../HOC/HOC';
import WrappedComponent from '../../modalBackDrop/ModalBackDrop';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/Actions/tasksActions';



class TaskForm extends Component {
    state = {
        task: '',
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({
            task: value
        })
    }

    createTask = (e) => {
        e.preventDefault()
        this.props.createNewTask(this.state.task)
    }

    render() {
        const { task } = this.state
        return (

            <form onSubmit={this.createTask} className={css.form}>
                <label htmlFor="task" className={css.formLabel}>Task name: </label>
                <input className={css.formInput}
                    type="text" value={task}
                    name="task"
                    id="task"
                    onChange={this.handleChange} />
                <button type="submit"
                    className="formButton">
                    Add task
                    </button>
            </form>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('ownProps', ownProps)
    return {
        createNewTask: (task) => {
            dispatch(addTask({task: task, text: ownProps.getBRED()}))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);