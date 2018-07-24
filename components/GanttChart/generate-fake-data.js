import faker from 'faker'
import randomColor from 'randomcolor'
import moment from 'moment'
import React from 'react';


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
    data.completedOn = new Date(faker.date.past()).toISOString();
    if(isArchived){
      data.endDate = new Date(faker.date.future()).toISOString();
    }else{
      data.endDate = new Date(faker.date.past()).toISOString();
    }
  }else{
    data.endDate = new Date(faker.date.recent()).toISOString();
  }
  return data;
}


export default function(groupCount = 200, daysInPast = 30){
  let taskList = [];
  for(let i=0; i< groupCount; i++){
    const task = getTaskData();
    taskList.push(task);
  }

  return taskList;
}



// export default function (groupCount = 30, itemCount = 30, daysInPast = 30) {
  
//   let randomSeed = Math.floor(Math.random() * 1000)
//   let groups = []
//   for (let i = 0; i < groupCount; i++) {
//     const name = faker.name.firstName();
//     groups.push({
//       id: `${i + 1}`,
//       title:faker.name.title(),
//       //rightTitle: faker.name.lastName(),
//       //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i }),
//       icon:{
//         title : name,
//         //toolTip : name,
//         onClick : () => ("Items has been clicked")
//       }
//     })
//   }

//   let items = []
//   for (let i = 0; i < itemCount; i++) {
//     const startDate = faker.date.recent(daysInPast).valueOf()
//     const startValue = moment(startDate).startOf('day').valueOf()
//     const endValue = moment(moment(startDate).endOf('day')).valueOf()
//     const status = "pending";
//     items.push({
//       id: i + '',
//       group: `${i+1}`,
//       //title: faker.hacker.phrase(),
//       start: startValue,
//       end: endValue,
//       status,
//       style:{
//         backgroundColor:  "#ffc16233",
//         border: "1px solid #e9b15a33"
//       },
//       // canMove: startValue > new Date().getTime(),
//       // canResize: startValue > new Date().getTime() ? (endValue > new Date().getTime() ? 'both' : 'left') : (endValue > new Date().getTime() ? 'right' : false),
//       className: getItemClassName(startValue, status),
//       itemProps: {
//         'data-tip': faker.hacker.phrase(),
//         id: `item-${i}` 
//       }
//     })
//   }

//   items = items.sort((a, b) => b - a)

//   return { groups, items }
// }



