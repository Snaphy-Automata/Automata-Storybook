/**
 * Created by Robins
 * 11th July 2018
 */


//Exports Constants..
export const ON_GANTT_ITEM_RESIZE       = "ON_ITEM_RESIZE";
export const ON_GANTT_ITEM_MOVED        = "ON_ITEM_MOVED";
export const ON_HORIZONTAL_SCROLL       = "ON_HORIZONTAL_SCROLL";
export const ON_ITEM_MOUSE_ENTER_ACTION = "ON_ITEM_ENTER_ACTION";
export const ON_ITEM_MOUSE_LEAVE_ACTION = "ON_ITEM_LEAVE_ACTION";
export const ON_ITEM_SELECTED           = "ON_ITEM_SELECTED_ACTION";
export const ON_TASK_LOAD_ACTION        = "ON_TASK_LOAD_ACTION";

//Will trigger when canvas is horizontally scrolled for date change
//Also change the group item
export function onHorizontalScrollAction(visibleTimeStart, visibleTimeEnd, updateScrollCanvas){
  //https://github.com/namespace-ee/react-calendar-timeline#ontimechangevisibletimestart-visibletimeend-updatescrollcanvas
  return (dispatch) => {
    dispatch({
      type: ON_HORIZONTAL_SCROLL,
      payload: {
        visibleTimeStart, 
        visibleTimeEnd,
        updateScrollCanvas,
      }
    })
  };
}




//Action for Updating the filter data..   
export function onItemResizeAction(itemId, time, edge) {
  return (dispatch) => {
    console.log("Item getting resized");
    dispatch({
      type: ON_GANTT_ITEM_RESIZE,
      payload: {
        itemId,
        time,
        edge
      }
    });
  };
}


export function onItemMoveAction(itemId, dragTime, newGroupOrder){
  return (dispatch)=>{
    console.log("Item getting moved");
    dispatch({
      type: ON_GANTT_ITEM_MOVED,
      payload: {
        itemId,
        dragTime,
        newGroupOrder
      }
    });
  }
}



export function onItemMouseEnterAction(itemId){
  return (dispatch) => {
    dispatch({
      type: ON_ITEM_MOUSE_ENTER_ACTION,
      payload:{
        itemId,
      }  
    });
  }
}



export function onItemMouseLeaveAction(itemId){
  return (dispatch) => {
    dispatch({
      type: ON_ITEM_MOUSE_LEAVE_ACTION,
      payload:{
        itemId,
      }  
    });
  }
}


export function onItemSelectAction(itemId){
  return (dispatch) => {
    dispatch({
      type: ON_ITEM_SELECTED,
      payload: {
        itemId,
      }
    });
  }
}

/**
 * When a list of task is loaded..
 * @param {*} taskList 
 */
export function loadTaskAction(taskList, assigneeList){
  return (dispatch)({
    type: ON_TASK_LOAD_ACTION,
    payload:{
      taskList,
    }
  })
}