/**
 * Created By Robins Gupta
 * 25th July 2018
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//Custom Import
import {
    onTaskInitAction,
  } from "./GanttChartActions";

import GanttTimeline from './GanttTimeline';


class GanttChart extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {
            tasks,
            onTaskInitAction,
        } = this.props;
        console.log("Tasks", tasks);
        onTaskInitAction(tasks);
    }

    render(){
        
        const {
            isTaskLoaded,
        } = this.props;

        

        if(isTaskLoaded){
            return (
                <GanttTimeline></GanttTimeline>
            )
        }else{
            //Load loading component..
            return (
                <div>Loading Gantt Chart</div>
            )
        }
    }

}




// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        isTaskLoaded: store.GanttChartReducer.isTaskLoaded,
    };
  }
  
  
  //Map Redux Actions to Props..
  const mapActionsToProps = {
    //map action here
    onTaskInitAction,
  };
  
  
  
  GanttChart.propTypes = {
    //tasks: PropTypes.array.isRequired,
  };
  

export default connect(mapStateToProps, mapActionsToProps)(GanttChart);