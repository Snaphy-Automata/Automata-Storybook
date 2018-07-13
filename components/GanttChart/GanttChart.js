import React, { Component } from 'react'
import moment from 'moment'
import {connect} from 'react-redux';
import Timeline from 'react-calendar-timeline/lib'
import 'react-calendar-timeline/lib/Timeline.css'


//Custom Import
import {onItemResizeAction} from "./GanttChartActions";


var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end'
}

const defaultHeaderLabelFormats =
  {
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
  .startOf('day')
  .add(1, 'day')
  .toDate()

const state = {
  defaultTimeStart,
  defaultTimeEnd
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { defaultTimeStart, defaultTimeEnd } = state
    const { groups, items, onItemResizeAction } = this.props;

    return (
      <Timeline
        groups={groups}
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

        sidebarWidth={170}
        sidebarContent={<div>April</div>}
        dragSnap={60*60*1000*24} //dragging unit set to be 24 hours 1 day
        headerLabelGroupHeight={0} //remvoe top header
        headerLabelHeight={23}
        itemHeightRatio={0.65}
        minZoom={60*60*1000*24} //Smallest time that can be zoomed. 1 day
        maxZoom={365.24 * 86400 * 1000} //longest time that can be zoomed 1 year.
        canChangeGroup={false} //items cannot be moved outside a group.
        useResizeHandle={true}
        onItemResize={onItemResizeAction}
      />
    )
  }
}

  // Retrieve data from store as props
  function mapStateToProps(store) {

    return {
      groups: store.GanttChartReducer.data.groups,
      items: store.GanttChartReducer.data.items,
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  onItemResizeAction,
};



  
export default connect(mapStateToProps, mapActionsToProps)(App);