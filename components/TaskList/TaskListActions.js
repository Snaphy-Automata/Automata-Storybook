export const ON_TASK_LIST_EXAPANDED = "on_all_task_list_expanded";

export function expandTaskListAction(isOpened){
    return (dispatch) => {
        dispatch({
          type: ON_TASK_LIST_EXAPANDED,
          payload: isOpened,
        })
    }
}