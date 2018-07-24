/**
 * Created by Robins Gupta
 * 23rd July 2018
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react';

//Custom Import
import {
    onItemMouseEnterAction,
    onItemMouseLeaveAction,
  } from "./GanttChartActions";

import {getStatusClass} from "./convertTask";

//Custom Style..
import "./GanttChart.css";


const ItemRenderer = (props) => {
    const {item, selected, onItemMouseLeaveAction, onItemMouseEnterAction,
        timelineContext:{
            visibleTimeStart,
            visibleTimeEnd,
            timelineWidth,
        }
    } = props;

    const statusClass = getStatusClass(item);

    const onMouseEnter = (event) => {
        onItemMouseEnterAction(item.id);
    }


    const onMouseLeave = (event) => {
        onItemMouseLeaveAction(item.id);
    }

    // let width = (timelineWidth/(visibleTimeEnd-visibleTimeStart))* (item.end - item.start);
    // width = width - 38;
    // const style = {
    //     width: `${width}px`
    // }
    return (    
    <div onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} className='gantt-chart-item-container'>
       
      {selected && <div className={`gantt-chart-item-icon ${statusClass} left`}>
        <Icon name="angle left"></Icon>
      </div>}
    
      <div  className='gantt-chart-item-title'></div>
      {/* {selected && <p className='tip'>{item.tip}</p>} */}
     
      {selected &&<div className={`gantt-chart-item-icon ${statusClass} right`}>
        <Icon name="angle right"></Icon>
      </div>}

    </div>
    )
};


  // Retrieve data from store as props
  function mapStateToProps(store) {

    return {
    
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  onItemMouseEnterAction,
  onItemMouseLeaveAction,
};



export default connect(mapStateToProps, mapActionsToProps)(ItemRenderer);