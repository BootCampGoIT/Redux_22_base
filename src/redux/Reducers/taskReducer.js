// import { ADDTASK, DELETETASK } from "../Constants/tasksConstants";

const initialState = {
    tasks: [],
    taskCount: 0,
    tasksDone: 0,
    tasksInProgress: 0
}


// const action  = {
//     type: ADDTASK,
//     payload: {task: "gjhdcgmhsd", id: "gbdh34ghj4h", important: true}
// }

// const initialState = []

export default (state = [], {type, payload}) => {

    switch (type) {
        case "ADDTASK":
            return [...state, payload]; //{id: "hhjmcd", task: 'gjhgcshmdchs'}

        // case DELETETASK:
        //     return state.filter(task => task.id !== action.payload);

        default:
            return state;
    }

}