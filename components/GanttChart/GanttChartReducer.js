/**
 * Created by Robins
 * 11th July 2018
 */

import generateFakeData from './generate-fake-data' 

import {ON_ITEM_RESIZE} from './GanttChartActions';

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
    case ON_ITEM_RESIZE:{
      //First find the item..
      const {itemId, time, edge} = action.payload;
      console.log("On Resize", itemId, time, edge);

      break;
    }

  }

  return state;
};


export default GanttChartReducer;
