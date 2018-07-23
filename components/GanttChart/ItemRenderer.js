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

//Custom Style..
import "./GanttChart.css";


const ItemRenderer = (props) => {
    console.log(props);
    const {item, selected, onItemMouseLeaveAction, onItemMouseEnterAction} = props;

    const onMouseEnter = (event) => {
        onItemMouseEnterAction(item.id);
    }


    const onMouseLeave = (event) => {
        onItemMouseLeaveAction(item.id);
    }

    return (    
    <div onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} className='custom-item'>
       
      <div className="gantt-chart-item-icon left">
        <Icon name="angle left"></Icon>
      </div>
    
      <div className='gantt-chart-item-title'></div>
      {/* {selected && <p className='tip'>{item.tip}</p>} */}
     
      <div className="gantt-chart-item-icon right">
        <Icon name="angle right"></Icon>
      </div>

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