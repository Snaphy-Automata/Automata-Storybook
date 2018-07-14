import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react'
import map from 'lodash/map';


import './TaskList.css';

import TaskListHeading from './TaskListHeading';
import TaskItem       from './TaskItem'

const TaskList = ({items, heading, isOpened, onArchiveClicked, onNewTaskClicked, onStateChanged}) => {

    return (
        <div>
            <TaskListHeading heading={heading} isOpened={isOpened} onArchiveClicked={onArchiveClicked} onNewTaskClicked={onNewTaskClicked}></TaskListHeading>
            {isOpened && items && items.length && <div>
                {
                    map(items, function(item, index){
                        return(
                            <TaskItem key={index} title={item.title} icon={item.icon} status={item.status} subTask={item.subTask} attachment={item.attachment} dueDate={item.dueDate}></TaskItem>
                        )
                    })
                }
            </div>}
        </div>
    )

}

export default TaskList;