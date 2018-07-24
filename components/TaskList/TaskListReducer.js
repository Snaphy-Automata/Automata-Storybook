import {
    ON_TASK_LIST_EXAPANDED,
    TASK_LIST
} from './TaskListActions';


const initialState = {
    isOpened : false,
    taskList : [
        {
        id : 1,
        title : "This is the first issue to be solved",
        icon:{
          title : "Nikita",
          toolTip : "Nikita",
          onClick : "Items has been clicked"
        },
        status: {
          title: "Completed",
          color : "#1ed0c1"
        },
        subTask:{
          total : 9,
          completed: 4
        },
        attachment: 3,
        labels : [
          {title : "Bug", color : "#ff9b00", onClick:"Bug"}
        ],
        dueDate : {
          date : "2018-07-10T01:14:00Z",
          onClick : "Date has been clicked"
        }
      },
      {
        id : 2,
        title : "Disable the button after clicking and then enable the button after getting response",
        icon: {
          icon : "users",
          toolTip : "Nikita, Mitsu, Sakura",
          onClick : "Items has been clicked"
        },
        status : {
          title : "In Progress",
          color : "#3b86ff"
        },
        subTask:{
          total : 15,
          completed : 10
        },
        attachment : 6,
        dueDate : {
          date : "2018-07-23T01:14:00Z",
          onClick : "Date has been clicked"
        }
      },
      {
        id : 3,
        title : "Not able to login",
        icon: {
          icon : "users",
          toolTip : "Nikita, Mitsu, Sakura",
          onClick : "Items has been clicked"
        },
        status : {
          title : "In Progress",
          color : "#3b86ff"
        },
        subTask:{
          total : 15,
          completed : 10
        },
        attachment : 6,
        dueDate : {
          date : "2018-07-23T01:14:00Z",
          onClick : "Date has been clicked"
        }
      },
      {
        id : 4,
        title : "Logout not working properly",
        icon: {
          icon : "users",
          toolTip : "Nikita, Mitsu, Sakura",
          onClick : "Items has been clicked"
        },
        status : {
          title : "In Progress",
          color : "#3b86ff"
        },
        subTask:{
          total : 15,
          completed : 10
        },
        attachment : 6,
        dueDate : {
          date : "2018-07-23T01:14:00Z",
          onClick : "Date has been clicked"
        }
      }
    ]
}

const TaskListReducer = (state = initialState, action) => {
    switch(action.type){
        case ON_TASK_LIST_EXAPANDED:{
            state = {
                ...state,
                isOpened : action.payload
            }
            break;
        }
        case TASK_LIST:{
            state = {
                ...state,
                taskList : action.payload
            }
        }
            

    }
    return state;
}

export default TaskListReducer;