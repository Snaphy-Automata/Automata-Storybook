import faker from 'faker'
import moment from 'moment'
import times from "lodash/times";


const STATUS = ["completed", "in_progress", "pending"];
const LABELS = ["bugs", "feature"];
const MEMBERS = ["user1", "user2"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const statusObj = {
    completed:{
        id: "completed",
        title: "completed",
        colorCode: "#ff4141"
    },
    in_progress:{
        id: "in_progress",
        title: "in progress",
        colorCode: "#ff4141"
    },
    pending:{
        id: "pending",
        title: "pending",
        colorCode: "#ff4141"
    }
}


export const memberObj = {
    user1:{
        id: "user1",
        firstName: "Robins",
        lastName: "Gupta",
    },
    user2:{
        id: "user2",
        firstName: "Nikita",
        lastName: "Mittal",
    },
}


export const labelObj = {
    bugs:{
        id: "bugs",
        title: "bugs",
        colorCode: "#ff4141"
    },
    feature:{
        id: "feature",
        title: "feature",
        colorCode: "#ff4141"
    },
    
}


export const items = times(30, (index)=> {

    const assignedTo = times(getRandomInt(1, MEMBERS.length), index => {
        return MEMBERS[index];
    });

    const statusId = getRandomInt(0, 1)? STATUS[getRandomInt(0, STATUS.length-1)]: undefined;
    let labels = [];
    if(getRandomInt(0, 1)){
        labels = times(getRandomInt(1, LABELS.length), index => {
            return LABELS[index];
        });
    }
    

    const getPastDateRandom = getRandomInt(1, 10);
    const startDate = getRandomInt(0, 1)? moment(faker.date.past(getPastDateRandom)): undefined;
    let endDate = getRandomInt(0, 1)? moment(faker.date.future(getPastDateRandom)): undefined;
    //const endDate = moment().subtract(1, 'day');

    const isCompleted = getRandomInt(0, 1)? true: false;
    let completedOn;
    if(isCompleted){
        completedOn = moment.utc();
    }

    return {
        id : faker.random.uuid(),
        title : faker.lorem.sentences(),
        assignedTo,
        position: faker.random.number(),
        labels,
        startDate,
        endDate,
        isCompleted: isCompleted,
        completedOn: completedOn,
        description: faker.name.jobDescriptor(),
        isArchived: false,
        statusId: statusId,
        durationInMs: 20000,
        durationInText: "2h",
        stats:{
            subtask:{
                total: 50,
                completed: getRandomInt(1, 50)
            },
            attachment:{
                total: getRandomInt(0, 10)
            },
            comment: {
                total: getRandomInt(0, 10)
            }
        }
    }
})
