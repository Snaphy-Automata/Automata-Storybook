/**
 * Created by Robins Gupta
 * 24th July 2018
 */
import moment from 'moment'




const STATUS = ["completed", "in_progress", "pending"];

 /**
 * Will fetch the Item Class Name
 */
const enhanceTask = (task) => {
    const startDate = task.startDate;
    const status    = task.status; 
    let className = (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend gantt-chart-group-item' : 'gantt-chart-group-item';
    if(status){
      className = `${className} ${status}`;
    }else{
        className = `${className} unassigned`;
    }

    task.className = className,
    task.itemProps =  {
        'data-tip': task.title,
        id: `item-${task.id}` 
    }

    return task;
};
  


/**
 * Will convert a task to task list format
 */
 export const convertTask = (taskList, assigneeList) => {
     const newTaskList = [];
    //Convert Task into groups and taskList...
    // const GroupOrItem = [
    //     {
    //         id: "TaskID",
    //         title: "Task Title",
    //         status: "Task Status",
    //         completedOn: "Date of Completion",
    //         isCompleted: Boolean,
    //         isArchived: false,
    //         assignedTo: ["12345", "23456"],
    //         duration: Number, //In milli Seconds
    //         startDate:"Date",
    //         endDate: "Date",
    //         labels: ["1234", "4321"],
    //         description: "this is a description",
    //         attachments: [], //
    //         sectionId: "SectionID",
    //         position: Number,

    //     }
    // ]
    taskList = taskList || [];
    for(let i=0; i< taskList.length; i++){
        const task = enhanceTask(taskList[i]);
        task.startDate = moment(task.startDate).startOf('day').valueOf();
        task.endDate = moment(task.endDate).endOf('day').valueOf()
        newTaskList.push(task);
    }

    return newTaskList;
 };