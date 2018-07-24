import React from 'react'
import {connect} from 'react-redux';
import map from 'lodash/map';
import TaskList from '../TaskList';
import {DragDropContext} from 'react-beautiful-dnd';

//Custom Import
import {populateSectionTaskList} from '../TaskList/TaskListActions';


const TaskSections = ({sectionList, populateSectionTaskList}) => {

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
                getList(source.droppableId, sectionList),
                source.index,
                destination.index
            )

            let sectionDataList = [...sectionList];
         
            for(var i=0;i<sectionDataList.length;i++){
                if(sectionDataList[i].sectionId === source.droppableId.toString()){
                    sectionDataList[i].items = items;
                    break;
                }
            }
            console.log("Drag End Result",items, source.droppableId.toString(), sectionDataList);

             //Call Redux to update the list with new position..
            populateSectionTaskList(sectionDataList);
        } else{
            const result = move(
                getList(source.droppableId, sectionList),
                getList(destination.droppableId, sectionList),
                source,
                destination

            )
            let sectionDataList = [...sectionList];
            for(var i=0;i<sectionDataList.length;i++){
                if(sectionDataList[i].sectionId === source.droppableId){
                    sectionDataList[i].items = result[source.droppableId];
                }
                if(sectionDataList[i].sectionId === destination.droppableId){
                    sectionDataList[i].items = result[destination.droppableId];
                }
            }

            console.log(" Droppable Result data", result, result[source.droppableId], result[destination.droppableId], sectionDataList);

           populateSectionTaskList(sectionDataList)

        }
    
        // const items = reorder(
        //     props.items,
        //     result.source.index,
        //     result.destination.index
        // );

        // //Call Redux to update the list with new position..

        // props.populateSectionTaskList(props.sectionId, items);
    }

    return (
        <div style={{height:300, background:"#f6f8f9"}}>
           <DragDropContext onDragEnd={onDragEnd}>
           {
                map(sectionList, function(section, index){
                    return (
                        <div key={index} style={{marginBottom:10, background:"#ffffff"}}>
                            <TaskList heading={section.title} items={section.items} type = "custom" sectionId={section.sectionId.toString()} onArchiveClicked={()=>{console.log("Archive has been clicked")}} onNewTaskClicked={()=>{console.log("New Task has been Clicked")}}></TaskList>
                        </div>
                    )
                })
            }
           </DragDropContext>
           
        </div>
    )


}

export function getList(droppableId, sectionList){
    let taskList = [];
    if(sectionList){
        for(var i=0;i<sectionList.length;i++){
            if(sectionList[i].sectionId === droppableId){
                taskList = sectionList[i].items;
                break;
            }
        }
    }
    return taskList;

}


// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        sectionList : store.TaskListReducer.sectionList
    };
}

//Map Redux Actions to Props..
const mapActionsToProps = {
    //map action here
    populateSectionTaskList
  };
  



export default connect(mapStateToProps, mapActionsToProps)(TaskSections);