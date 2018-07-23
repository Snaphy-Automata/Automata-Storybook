/**
 * Created by Robins
 * 11th July 2018
 */


//Exports Constants..
export const ON_GANTT_ITEM_RESIZE = "ON_ITEM_RESIZE";
export const ON_GANTT_ITEM_MOVED  = "ON_ITEM_MOVED";
export const ON_HORIZONTAL_SCROLL = "ON_HORIZONTAL_SCROLL";

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