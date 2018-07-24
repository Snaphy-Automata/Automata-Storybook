import faker from 'faker'
import moment from 'moment'


const STATUS = ["completed", "in_progress", "pending"];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getTaskData = (assignedTo) => {
  const statusIndex = getRandomInt(0, 3)
  const duration    = getRandomInt(3600, 82400);
  const status      = STATUS[statusIndex];
  const data = {
    id: faker.random.uuid(),
    projectId: faker.random.uuid(),
    ownerId: faker.random.uuid(),
    position:faker.random.number(),
    status,
    duration,
    title: faker.name.title(),
    description:faker.name.jobDescriptor(),
    sectionId: faker.random.number(),
    //assignedTo: assignedTo,
  };

  const isArchived  = !(Math.random() < 0.7);
  const isCompleted = status === "completed";

  data.isArchived = isArchived;
  data.startDate = status !== undefined ? new Date(faker.date.past()).toISOString():  undefined;
  data.isCompleted = isCompleted;
  if(isCompleted){
    //Completed date and start end date is past..
    data.completedOn = moment(data.startDate).add(4, 'day');
    if(isArchived){
      data.endDate = moment(data.startDate).add(4, 'day');
    }else{
      data.endDate = moment(data.startDate).add(2, 'day');
    }
  }else{
    data.endDate = moment(data.startDate).add(2, 'day');
  }
  return data;
}


export default function(groupCount = 30, daysInPast = 30){
  let taskList = [];
  for(let i=0; i< groupCount; i++){
    const task = getTaskData();
    taskList.push(task);
  }

  return taskList;
}


