import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon, Input } from 'semantic-ui-react'

import './TaskList.css';

const TaskListHeading = ({ heading, isOpened, onArchiveClicked, onNewTaskClicked, onStateChanged, type}) => {

    const getIcon = function(){
        if(isOpened){
            return `angle down`
        } else{
            return `angle left`
        }
    }

    return (
        <div className="task-list-heading-container">
                <div className="task-list-heading-icon"> <Icon name={getIcon()} onClick={onStateChanged}></Icon></div>
                <div className="task-list-heading-title">
                    {type === "fixed" && <div>{heading}</div>}
                    {type === "custom" && <Input transparent placeholder="Write Section Name" defaultValue="My Bugs"/>}
                </div>
                <div className="task-list-heading-archive-container" >
                    <div>
                        <Icon style={{display:"inline"}} name="archive" onClick={onArchiveClicked}></Icon>
                        <div style={{display: "inline", marginLeft: "5px"}} onClick={onArchiveClicked}>Archive</div>
                    </div>
                    
                </div>
                <div className="task-list-heading-add-new-container" >
                    <div>
                        <Icon style={{display: "inline"}}name="list" onClick={onNewTaskClicked}></Icon>
                        <div style={{display: "inline", marginLeft: "5px"}} onClick={onNewTaskClicked}>Add New Task</div>
                    </div>
                    
                </div>

            </div>
    )


}

export default TaskListHeading;