/**
 * Created by Robins
 * 11th July 2018
 */


 //Exports Constants..
 export const ON_ITEM_RESIZE = "ON_ITEM_RESIZE";

//Action for Updating the filter data..   
export function onItemResizeAction(itemId, time, edge) {
    return (dispatch) => {
      console.log("Item getting resized");  
      dispatch({
        type: ON_ITEM_RESIZE,
        payload: {
            itemId, time, edge
        }
      });
    };
  }