import React from 'react'
import {connect} from 'react-redux';
import map from 'lodash/map';
import TaskList from '../TaskList';


const TaskSections = ({sectionList}) => {

    return (
        <div>
            {
                map(sectionList, function(section, index){
                    return (
                        <div key={index}>
                            <TaskList heading={section.title} items={section.items} type = "custom" sectionId={section.sectionId} onArchiveClicked={()=>{console.log("Archive has been clicked")}} onNewTaskClicked={()=>{console.log("New Task has been Clicked")}}></TaskList>
                        </div>
                    )
                })
            }
        </div>
    )


}


// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        sectionList : store.TaskSectionsReducer.sectionList
    };
}

//Map Redux Actions to Props..
const mapActionsToProps = {
    //map action here
  };
  



export default connect(mapStateToProps, mapActionsToProps)(TaskSections);