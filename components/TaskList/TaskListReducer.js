import {
    ON_TASK_LIST_EXAPANDED
} from './TaskListActions';


const initialState = {
    isOpened : false
}

const TaskListReducer = (state = initialState, action) => {
    switch(action.type){
        case ON_TASK_LIST_EXAPANDED:{
            state = {
                ...state,
                isOpened : action.payload
            }
            break;
        }
            

    }
    return state;
}

export default TaskListReducer;