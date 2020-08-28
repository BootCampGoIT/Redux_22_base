import React from 'react';
import TaskListItem from './taskListItem/TaskListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {connect} from "react-redux";
import styles from './TaskList.module.css';

const TaskList = ({tasks}) => {
    return (
        <TransitionGroup component="ul">
            {tasks.map(task => (
                <CSSTransition key={task.id} classNames={styles} timeout={1000}>
                    <TaskListItem
                      
                        task={task} />
                      
                </CSSTransition>

            ))}

        </TransitionGroup>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);