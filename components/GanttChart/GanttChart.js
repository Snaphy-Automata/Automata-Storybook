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
        onTaskInitAction(tasks);
    }

    render(){
        const {
            isTaskLoaded,
            onTaskResized,
            onItemMoved,
        } = this.props;
        if(isTaskLoaded){
            return (
                <GanttTimeline onTaskResized={onTaskResized} onItemMoved={onItemMoved}></GanttTimeline>
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
    tasks: PropTypes.array.isRequired,
    onTaskResized: PropTypes.func.isRequired,
    onItemMoved: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapActionsToProps)(GanttChart);