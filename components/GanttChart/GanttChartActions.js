/**
 * Created by Robins
 * 11th July 2018
 */


//Exports Constants..
export const ON_GANTT_ITEM_RESIZE = "ON_ITEM_RESIZE";
export const ON_GANTT_ITEM_MOVED  = "ON_ITEM_MOVED";

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