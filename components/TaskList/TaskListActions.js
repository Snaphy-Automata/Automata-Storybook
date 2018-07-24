export const ON_TASK_LIST_EXAPANDED = "on_all_task_list_expanded";
export const TASK_LIST              = "task_list";

export function expandTaskListAction(isOpened){
    return (dispatch) => {
        dispatch({
          type: ON_TASK_LIST_EXAPANDED,
          payload: isOpened,
        })
    }
}


export function populateTaskListAction(taskList){
    return (dispatch) => {
        dispatch({
            type: TASK_LIST,
            payload: taskList
        })
    }
}

