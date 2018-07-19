import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react'
import map from 'lodash/map';


import './TaskList.css';

import TaskListHeading from './TaskListHeading';
import TaskItem       from './TaskItem'

import {expandTaskListAction} from './TaskListActions';

const TaskList = (props) => {

    console.log("Task List Props Data", props);

    const onStateChangedFunction = function(){
        console.log("Method called", props.isOpened);
        props.expandTaskListAction(!props.isOpened);
    }

    return (
        <div>
            <TaskListHeading heading={props.heading} isOpened={props.isOpened} onArchiveClicked={props.onArchiveClicked} onNewTaskClicked={props.onNewTaskClicked} onStateChanged={onStateChangedFunction} type={props.type}></TaskListHeading>
            {props.isOpened && props.items && props.items.length && <div>
                {
                    map(props.items, function(item, index){
                        return(
                            <TaskItem key={index} title={item.title} icon={item.icon} status={item.status} subTask={item.subTask} attachment={item.attachment} dueDate={item.dueDate}></TaskItem>
                        )
                    })
                }
            </div>}
        </div>
    )

}

  // Retrieve data from store as props
  function mapStateToProps(store) {

    return {
        isOpened : store.TaskListReducer.isOpened
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  expandTaskListAction
};




export default connect(mapStateToProps, mapActionsToProps)(TaskList);