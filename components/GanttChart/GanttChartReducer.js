/**
 * Created by Robins
 * 11th July 2018
 */

import generateFakeData from './generate-fake-data' 

import {ON_GANTT_ITEM_MOVED, ON_GANTT_ITEM_RESIZE} from './GanttChartActions';

const { groups, items } = generateFakeData()

//Set initial state for gridview reducer..
const initialState = {
  data: {
    groups,
    items,
  }
};

const GanttChartReducer = (state = initialState, action) => {
  switch (action.type){
    case ON_GANTT_ITEM_MOVED:{
      console.log("I am here");
      const {
        itemId,
        dragTime,
        newGroupOrder
      } = action.payload;
      const oldItemList = state.data.items;
      const newItem = [];
      let {targetItem, index} = fetchTargetItem(oldItemList, newItem, itemId);
      const oldTimeDiff =  targetItem.end - targetItem.start;
      targetItem.start = dragTime;
      targetItem.end = dragTime + oldTimeDiff;
      console.log(dragTime, newGroupOrder, targetItem);

      state = {
        ...state,
        data: {
          groups: state.data.groups,
          items: newItem,
        }
      }
      break;
    }
    case ON_GANTT_ITEM_RESIZE:{
      const {itemId, time, edge} = action.payload;
      const oldItemList = state.data.items;
      const newItem = [];
      let {targetItem, index} = fetchTargetItem(oldItemList, newItem, itemId);
      //First find the item..
      if(targetItem && index !== -1){
        console.log("Target Item", targetItem);
        console.log(time, edge);
        if(edge === "left"){
          //Start date modified
          targetItem.start = time;
        }else{
          targetItem.end = time;
        }

        newItem[index] = targetItem;
      }

      state = {
        ...state,
        data: {
          groups: state.data.groups,
          items: newItem,
        }
      }
      
      break;
    }

  }

  return state;
};


/**
 * Will fetch the Target Item from List..
 * @param {*} oldItemList 
 * @param {*} newItemArr 
 */
const fetchTargetItem = (oldItemList, newItemArr, itemId)=>{
  let targetItem, index = -1;
  for(let i=0; i<oldItemList.length;i++){
    const item = oldItemList[i];
    if(item.id === itemId){
      targetItem = item;
      index = i;
    }
    newItemArr.push(item);
  }

  return {
    targetItem,
    index
  }
};


export default GanttChartReducer;
