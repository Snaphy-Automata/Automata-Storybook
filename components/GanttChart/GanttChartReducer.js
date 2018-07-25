/**
 * Created by Robins
 * 11th July 2018
 */

import generateFakeData from './generate-fake-data' 
import moment from 'moment'

//Custom Import
import month from './month.json';
import {convertTask, enhanceTask} from "./convertTask";
import {
  ON_GANTT_ITEM_MOVED, 
  ON_GANTT_ITEM_RESIZE, 
  ON_HORIZONTAL_SCROLL,
  ON_ITEM_MOUSE_ENTER_ACTION,
  ON_ITEM_MOUSE_LEAVE_ACTION,
  ON_ITEM_SELECTED,
  INITIALIZE_GANTT_WITH_DATA,
} from './GanttChartActions';

//Will reuturn current month..
const sidebarTitle = () => {
  const monthInt = moment().month(); //0-11
  const sidebarHeadingTitle = month[monthInt];
  return sidebarHeadingTitle;
}


//Set initial state for gridview reducer..
const initialState = {
  sidebarHeadingTitle: sidebarTitle(),
  selectedItemId: undefined,
  assignedTo:[],
  data: {
    taskList:[],
  },
  displayStartTime: moment().add(1, 'day').startOf('day').valueOf(),
  displayEndTime: moment().add(1, 'day').endOf('day').valueOf(),
  isTaskLoaded: false,
};

const GanttChartReducer = (state = initialState, action) => {
  switch (action.type){
    case ON_GANTT_ITEM_MOVED:{
      const {
        itemId,
        dragTime,
        newGroupOrder
      } = action.payload;
      const oldTaskList = state.data.taskList;
      const newItem = [];
      let {targetItem, index} = fetchTargetItem(oldTaskList, newItem, itemId);
      const oldTimeDiff =  targetItem.endDate - targetItem.startDate;
      targetItem.startDate = dragTime;
      targetItem.endDate = dragTime + oldTimeDiff;

      const task = enhanceTask(targetItem);
      newItem[index] = task;

      state = {
        ...state,
        data: {
          taskList: newItem
        }
      }
      break;
    }
    //ON Task Date Resize
    case ON_GANTT_ITEM_RESIZE:{
      const {itemId, time, edge} = action.payload;
      const oldTaskList = state.data.taskList;
      const newItem = [];
      let {targetItem, index} = fetchTargetItem(oldTaskList, newItem, itemId);
      //First find the item..
      if(targetItem && index !== -1){
        if(edge === "left"){
          //Start date modified
          targetItem.startDate = time;
        }else{
          targetItem.endDate = time;
        }

        const task = enhanceTask(targetItem);

        newItem[index] = targetItem;
      }

      
      state = {
        ...state,
        data: {
          taskList: newItem
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
      console.log("I am scrolling",visibleTimeStart, visibleTimeEnd);
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
    case ON_ITEM_MOUSE_ENTER_ACTION:{
      //When mouse is entered inside item area.
      //Select the item. To start the scrolling without selecting it first.
      //https://github.com/namespace-ee/react-calendar-timeline/issues/290#issuecomment-391254489
      const {itemId} = action.payload;

      if(!state.selectedItemId || state.selectedItemId[0] !== itemId){
        state = {
          ...state,
          selectedItemId: [itemId],
        }
      }
      break;
    }
    case ON_ITEM_MOUSE_LEAVE_ACTION:{
      //When mouse is leaved inside item area.
      //Select the item. To start the scrolling without selecting it first.
      //https://github.com/namespace-ee/react-calendar-timeline/issues/290#issuecomment-391254489
      const {itemId} = action.payload;
      // state = {
      //   ...state,
      //   //selectedItemId: [],
      // }
      //Do nothing..
      break;
    }
    case ON_ITEM_SELECTED:{
      const {itemId} = action.payload;
      state = {
        ...state,
        selectedItemIds: [itemId],
      }

      break;
    }
    case INITIALIZE_GANTT_WITH_DATA:{
      const taskItems = convertTask(action.payload.taskList);
      state = {
        ...state,
        isTaskLoaded: true,
        data:{
          taskList: taskItems,
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
