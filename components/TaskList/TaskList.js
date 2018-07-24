import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react'
import map from 'lodash/map';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import './TaskList.css';

import TaskListHeading from './TaskListHeading';
import TaskItem       from './TaskItem'

import {expandTaskListAction, populateTaskListAction} from './TaskListActions';

const TaskList = (props) => {

    console.log("Task List Props Data", props);

    const onStateChangedFunction = function(){
        console.log("Method called", props.isOpened);
        props.expandTaskListAction(!props.isOpened);
    }

    const onDragEnd = (result) => {
          // dropped outside the list
        if (!result.destination) {
            return;
        }
    
        const items = reorder(
            props.items,
            result.source.index,
            result.destination.index
        );

        //Call Redux to update the list with new position..
        props.populateTaskListAction(items);
        // this.setState({
        //     items,
        // });
    }


    // function to reorder the list after draging the item to particualr position..
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };
  

    return (
        <div>
            <TaskListHeading heading={props.heading} isOpened={props.isOpened} onArchiveClicked={props.onArchiveClicked} onNewTaskClicked={props.onNewTaskClicked} onStateChanged={onStateChangedFunction} type={props.type}></TaskListHeading>
            {props.isOpened && props.items && props.items.length && <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}>
                        {
                            map(props.items, function(item, index){
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}>
                                                <TaskItem key={index} title={item.title} icon={item.icon} status={item.status} subTask={item.subTask} attachment={item.attachment} dueDate={item.dueDate} provided = {provided} ></TaskItem>
                                            
                                            </div>
                                        )}

                                    </Draggable>
                                )
                                
                            })
                        }

                        </div>
                    )}
                </Droppable>

            </DragDropContext>}
            {/* {props.isOpened && props.items && props.items.length && <div>

                {
                    map(props.items, function(item, index){
                        return(
                            <TaskItem key={index} title={item.title} icon={item.icon} status={item.status} subTask={item.subTask} attachment={item.attachment} dueDate={item.dueDate}></TaskItem>
                        )
                    })
                }
            </div>} */}
        </div>
    )

}

  // Retrieve data from store as props
  function mapStateToProps(store) {

    return {
        isOpened : store.TaskListReducer.isOpened,
        items : store.TaskListReducer.taskList
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  expandTaskListAction,
  populateTaskListAction
};




export default connect(mapStateToProps, mapActionsToProps)(TaskList);