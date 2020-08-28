import React, { Component } from 'react'
import TaskForm from './taskForm/TaskForm';
import TaskList from './taskList/TaskList';
import styles from './Task.module.css';




class Task extends Component {
    getBRED = () => {
        return "BRED"
    }
    render() {
        return (
            <>
                <TaskForm getBRED={this.getBRED} />
                <TaskList />
            </>
        );
    }
}

export default Task;





















// const isSimilar = (array1, array2) => {
//     const diffResult = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         const user1 = array1[i];
//         const user2 = array2[i];
//         const keys = Object.keys(user1);
//         const keys2 = Object.keys(user2);
//         for (const key of keys2) {
//             if (key in array1[i]) {
//                 diffResult.push(true)
//             } else diffResult.push(false)
//         }
//         for (const key of keys) {
//             if (key in array2[i]) {
//                 diffResult.push(true)
//             } else diffResult.push(false)

//             if (user1[key] === user2[key]) {
//                 diffResult.push(true)
//             } else diffResult.push(false)
//         }
//     }
//     if (diffResult.includes(false)) {
//         return false
//     } else return true
// }









