// import { ADDTASK, DELETETASK, EDITTASK } from '../Constants/tasksConstants'; 

export const addTask = (task) => {
    return {
        type: "ADDTSK",
        payload: task,
    };
}
// const deleteTask = (id) => {
//     return {
//         type: DELETETASK,
//         payload: id
//     }
// }

// const editTask = (id) => {
//     return {
//         type: EDITTASK,
//         payload: id
//     }
// }

// export { addTask, deleteTask, editTask }




