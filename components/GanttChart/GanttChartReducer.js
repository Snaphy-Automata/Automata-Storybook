/**
 * Created by Robins
 * 11th July 2018
 */

import generateFakeData from './generate-fake-data' 
import moment from 'moment'

//Custom Import
import month from './month.json';

import {
  ON_GANTT_ITEM_MOVED, 
  ON_GANTT_ITEM_RESIZE, 
  ON_HORIZONTAL_SCROLL
} from './GanttChartActions';

const { groups, items } = generateFakeData()
const monthInt = moment().month(); //0-11
const sidebarHeadingTitle = month[monthInt];
//Set initial state for gridview reducer..
const initialState = {
  sidebarHeadingTitle,
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
    } //end case..
    case ON_HORIZONTAL_SCROLL:{
      const { 
        visibleTimeStart, 
        visibleTimeEnd,
        updateScrollCanvas
      } = action.payload;

      const currentYear = moment().year(); 
      //FInd the value of month from unix miliseconds..
      const monthInt = moment(visibleTimeStart).month(); //0-11
      const visibleYear = moment(visibleTimeStart).year();
      let sidebarHeadingTitle;
      if(visibleYear !== currentYear){
        sidebarHeadingTitle = `${month[monthInt]} ${visibleYear}`;
      }else{
        sidebarHeadingTitle = `${month[monthInt]}`;
      }


      

      state = {
        ...state,
        sidebarHeadingTitle,
      }

      //Now update Scroll Canvas..
      updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
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
