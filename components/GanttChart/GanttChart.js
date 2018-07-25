import React, { Component } from 'react'
import moment from 'moment'
import {connect} from 'react-redux';
import Timeline from 'react-calendar-timeline/lib'
import 'react-calendar-timeline/lib/Timeline.css'
import PropTypes from 'prop-types';


//Custom Import
import {
  onItemResizeAction,
  onItemMoveAction,
  onHorizontalScrollAction,
  onItemSelectAction,
} from "./GanttChartActions";
import GroupRenderer from "./GroupRenderer";
import ItemRenderer from "./ItemRenderer";

//Custom style
import "./GanttChart.css";


var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  //itemTitleKey: 'title',
  //itemDivTitleKey: 'title',
  itemGroupKey: 'id',
  itemTimeStartKey: 'startDate',
  itemTimeEndKey: 'endDate'
}

const defaultHeaderLabelFormats = {
    yearShort: 'YY',
    yearLong: 'YYYY',
    monthShort: 'MM/YY',
    monthMedium: 'MM/YYYY',
    monthMediumLong: 'MMM YYYY',
    monthLong: 'MMMM YYYY',
    dayShort: 'L',
    dayLong: 'dddd, LL',
    hourShort: 'HH',
    hourMedium: 'HH:00',
    hourMediumLong: 'L, HH:00',
    hourLong: 'dddd, LL, HH:00',
    time: 'LLL'
  }

const defaultTimeStart = moment()
  .startOf('day')
  .toDate()
const defaultTimeEnd = moment()
  .endOf('day')
  .add(12, 'day')
  .toDate()

const state = {
  defaultTimeStart,
  defaultTimeEnd
}

const GanttChart = (props) => {
  const { defaultTimeStart, defaultTimeEnd } = state
  const { 
    taskList, 
    onItemResizeAction, 
    onItemMoveAction, 
    onHorizontalScrollAction, 
    sidebarHeadingTitle, 
    selectedItemId,
    onItemSelectAction,
  } = props;

  const items = [...taskList];
  console.log("I am loading");
  return (
    <Timeline
      groups={taskList}
      items={items}
      keys={keys}
      itemsSorted
      itemTouchSendsClick={false}
      stackItems
      showCursorLine
      canMove={true}
      canResize={"both"}
      defaultTimeStart={defaultTimeStart}
      defaultTimeEnd={defaultTimeEnd}
      lineHeight={25}
      selected={selectedItemId}
      sidebarWidth={170}
      sidebarContent={<div>{sidebarHeadingTitle}</div>}
      dragSnap={60*60*1000*24} //dragging unit set to be 24 hours 1 day
      headerLabelGroupHeight={0} //remvoe top header
      headerLabelHeight={23}
      itemHeightRatio={0.70}
      minZoom={60*60*1000*24} //Smallest time that can be zoomed. 1 day
      maxZoom={365.24 * 86400 * 1000} //longest time that can be zoomed 1 year.
      timeSteps={{
        day: 1,
        month: 1,
        year: 1
      }}
      canChangeGroup={false} //items cannot be moved outside a group.
      itemRenderer={ItemRenderer}
      useResizeHandle={true}
      onItemResize={onItemResizeAction}
      onItemMove={onItemMoveAction}
      groupRenderer={GroupRenderer}
      onTimeChange={onHorizontalScrollAction}
      onItemSelect={onItemSelectAction}
      showCursorLine={false}
    />
  ) 
};



// Retrieve data from store as props
function mapStateToProps(store) {

  return {
    sidebarHeadingTitle: store.GanttChartReducer.sidebarHeadingTitle,
    selectedItemId: store.GanttChartReducer.selectedItemId,
    taskList: store.GanttChartReducer.data.taskList,
  };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  onItemResizeAction,
  onItemMoveAction,
  onHorizontalScrollAction,
  onItemSelectAction,
};



GanttChart.propTypes = {
  //tasks: PropTypes.array.isRequired,
  assignedTo: PropTypes.array.isRequired,
};


  
export default connect(mapStateToProps, mapActionsToProps)(GanttChart);