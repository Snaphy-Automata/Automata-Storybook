import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon, Input } from 'semantic-ui-react'

import './TaskList.css';

const TaskListHeading = ({ heading, isOpened, onArchiveClicked, onNewTaskClicked, onStateChanged, type, subHeadingComponent, headingClassName}) => {

    const getIcon = function(){
        if(isOpened){
            return `angle down`
        } else{
            return `angle right`
        }
    }
    headingClassName = headingClassName || "";
    headingClassName = `task-list-heading-container ${headingClassName}`

    return (
        <div className={headingClassName}>
                <div onClick={onStateChanged} className={"task-list-heading-wrapper task-not-selectable"}>
                    <div className="task-list-heading-icon"> <Icon name={getIcon()} ></Icon></div>
                    <div className="task-list-heading-title">
                        {type === "fixed" && <div>{heading}</div>}
                        {type === "custom" && <Input transparent placeholder="Write Section Name" defaultValue="My Bugs"/>}
                    </div>
                </div>
                {
                    !subHeadingComponent && 
                    <div className="task-list-sub-heading-wrapper">
                        <div className="task-list-heading-archive-container on-subheading-hover" >
                            <div>
                                <Icon style={{display:"inline"}} name="archive" onClick={onArchiveClicked}></Icon>
                                <div style={{display: "inline", marginLeft: "5px"}} onClick={onArchiveClicked}>Archive</div>
                            </div>
                            
                        </div>
                        <div className="task-list-heading-add-new-container on-subheading-hover" >
                            <div>
                                <Icon style={{display: "inline"}} name="clipboard outline" onClick={onNewTaskClicked}></Icon>
                                <div style={{display: "inline", marginLeft: "5px"}} onClick={onNewTaskClicked}>Add New Task</div>
                            </div>    
                        </div>
                    </div>
                }
                {
                    subHeadingComponent && subHeadingComponent
                }

            </div>
    )


}

export default TaskListHeading;