/**
 * Created by Robins Gupta
 * 24th July 2018
 */
import moment from 'moment'




const STATUS = ["completed", "in_progress", "pending"];

const STATUS_OBJ = {
    completed: "completed",
    in_progress: "in_progress",
    pending: "pending",
    unassigned: "unassigned",
    delayed: "delayed",
}

/**
 * Will enhance taskObj data.
 * @param {*} taskObj 
 */
export const enhanceTask = (taskObj) => {
    const task      = getDates(taskObj);
    const startDate = task.startDate;
    const endDate   = task.endDate;
    const status    = task.status; 
    let className = (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend gantt-chart-group-item' : 'gantt-chart-group-item';
    const statusClass = getStatusClass(task);    
    console.log(statusClass);
    task.className = `${className} ${statusClass}`;
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
    taskList = taskList || [];
    for(let i=0; i< taskList.length; i++){
        const task = enhanceTask(taskList[i]);
        newTaskList.push(task);
    }
    return newTaskList;
};




/**
 * Return the status class for the object..
 * @param {*} taskObj 
 */
 export const getStatusClass = (taskObj) => {
    taskObj.isDelayed = false;
    if(taskObj.isCompleted){
        return STATUS_OBJ.completed;
    }else if(taskObj.isUnassigned){
        return STATUS_OBJ.unassigned;
    }else{
        const todayDate = moment().endOf('day').valueOf();
        //Check for delayed...
        if(taskObj.endDate < todayDate ){
            taskObj.isDelayed = true;
            return STATUS_OBJ.delayed;
        }else if( taskObj.status ===  STATUS_OBJ.pending){
            return STATUS_OBJ.pending;
        }else{
            return STATUS_OBJ.in_progress;
        }
    }
 }




 /**
  * Will add start and end date.. to the task..
  **/
 const getDates = (taskObj) => {
    const task =  { ...taskObj };
    let isUnassigned = false;
    if(task.startDate && task.endDate){
        //Both present..
        task.startDate = moment(task.startDate).startOf('day').valueOf();
        task.endDate   = moment(task.endDate).endOf('day').valueOf();
    }else if(!task.startDate && task.endDate){
        //Has end date but not start date...
        task.endDate   = moment(task.endDate).endOf('day').valueOf();
        //Start date will be start of day of end date..
        task.startDate = moment(task.endDate).startOf('day').valueOf();
    }else if(task.startDate && !task.endDate){
        //Has start date but not end date..
        task.startDate = moment(task.startDate).startOf('day').valueOf();
        //End date will be end of start date..
        task.endDate   = moment(task.startDate).endOf('day').valueOf();
    }else{
        isUnassigned = true;
        //No start date and no end date..
        //Has start date but not end date..
        task.startDate = moment().startOf('day').valueOf();
        //End date will be end of start date..
        task.endDate   = moment().endOf('day').valueOf();
    }

    task.isUnassigned = isUnassigned;

    return task;
 }