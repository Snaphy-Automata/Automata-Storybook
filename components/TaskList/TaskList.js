import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react'
import map from 'lodash/map';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import './TaskList.css';

import TaskListHeading from './TaskListHeading';
import TaskItem       from './TaskItem'
import {getList}      from '../TaskSections/TaskSections'

import {expandTaskListAction, populateTaskListAction, populateSectionTaskList} from './TaskListActions';

const TaskList = (props) => {

    const onDragEnd = (result) => {
        const {source, destination} = result;

       

        // dropped outside the list
        if (!destination) {
            return;
        }

        console.log("Different List", result);
        
        //Drag and drop within the list
        if(source.droppableId === destination.droppableId){
          
            const items = reorder(
                props.items,
                source.index,
                destination.index
            )

            let sectionDataList = [...props.sectionList];
         
            for(var i=0;i<sectionDataList.length;i++){
                if(sectionDataList[i].sectionId === props.sectionId.toString()){
                    sectionDataList[i].items = items;
                    break;
                }
            }
            console.log("Drag End Result",items, props.sectionId.toString(), sectionDataList);

             //Call Redux to update the list with new position..
            props.populateSectionTaskList(sectionDataList);
        } else{
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination

            )

            console.log(" Droppable Result data", result);

          //  props.populateSectionTaskList(props.sectionId, )

        }
    
        // const items = reorder(
        //     props.items,
        //     result.source.index,
        //     result.destination.index
        // );

        // //Call Redux to update the list with new position..

        // props.populateSectionTaskList(props.sectionId, items);
    }

    // onDragEnd = result => {
    //     const { source, destination } = result;

    //     // dropped outside the list
    //     if (!destination) {
    //         return;
    //     }

    //     if (source.droppableId === destination.droppableId) {
    //         const items = reorder(
    //             this.getList(source.droppableId),
    //             source.index,
    //             destination.index
    //         );

    //         let state = { items };

    //         if (source.droppableId === 'droppable2') {
    //             state = { selected: items };
    //         }

    //         this.setState(state);
    //     } else {
    //         const result = move(
    //             this.getList(source.droppableId),
    //             this.getList(destination.droppableId),
    //             source,
    //             destination
    //         );

    //         this.setState({
    //             items: result.droppable,
    //             selected: result.droppable2
    //         });
    //     }
    // };

    /**
     * Move item from list to another list
     * @param {*} source 
     * @param {*} destination 
     * @param {*} droppableSource 
     * @param {*} droppableDestination 
     */
    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
    
        destClone.splice(droppableDestination.index, 0, removed);
    
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
    
        return result;
    };


    // function to reorder the list after draging the item to particualr position..
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };

    const taskHeadingConfig = props.taskListReducer[props.sectionId];
    const isSectionOpened = taskHeadingConfig && taskHeadingConfig.isOpened ? true : false;
  

    return (
        <div>
            <TaskListHeading heading={props.heading} onArchiveClicked={props.onArchiveClicked} onNewTaskClicked={props.onNewTaskClicked} type={props.type} sectionId={props.sectionId}></TaskListHeading>
            {isSectionOpened && props.items && props.items.length &&
                <Droppable droppableId={props.sectionId}>
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
                         {provided.placeholder}

                        </div>
                    )}
                    
                </Droppable>

           }
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
      const taskListReducer = store.TaskListReducer
    return {
       // isOpened : store.TaskListReducer.isOpened,
       // items : store.TaskListReducer.taskList,
        sectionList : store.TaskListReducer.sectionList,
        taskListReducer
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action 
  populateSectionTaskList,
  getList
 // expandTaskListAction,
 // populateTaskListAction
};




export default connect(mapStateToProps, mapActionsToProps)(TaskList);