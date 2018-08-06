import faker from 'faker'
import moment from 'moment'
import times from "lodash/times";


const STATUS = ["completed", "in_progress", "pending"];
//const LABELS = ["bugs", "feature"];
export const MEMBERS = ["user1", "user2"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getRandomBoolean = ()=>{
    return Math.random() < 0.4;
}


const getLabelObj = () => {
    const labelList = [];
    const labelObj = [];
    times(20, (index)=> {
        const title = faker.name.firstName();
        const id    = faker.random.uuid();
        const colorCode = faker.internet.color();
        labelList.push(id);
        labelObj[id]  = {
            id,
            title,
            colorCode,
        }
    });

    return {labelList, labelObj}
}

const labelDataObj = getLabelObj();
const LABELS = labelDataObj.labelList;

export const labelObj = labelDataObj.labelObj;



export const statusObj = {
    completed:{
        id: "completed",
        title: "completed",
        colorCode: "#1ed0c1"
    },
    in_progress:{
        id: "in_progress",
        title: "in progress",
        colorCode: "#3b86ff"
    },
    pending:{
        id: "pending",
        title: "pending",
        colorCode: "#ffc162"
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




export const items = times(10000, (index)=> {

    let assignedTo = [];

    let subtaskObj;
    let attachmentObj;
    if(getRandomBoolean()){
        subtaskObj = {
            total: 50,
            completed: getRandomInt(1, 50)
        }
    }

    if(getRandomBoolean()){
        attachmentObj = {
            total: getRandomInt(0, 10)
        }
    }
    if(getRandomInt(0,1)){
        assignedTo = times(getRandomInt(1, MEMBERS.length), index => {
            return MEMBERS[index];
        });
    }
    

    let statusId = getRandomInt(0, 1)? STATUS[getRandomInt(0, STATUS.length-1)]: undefined;
    let labels = [];
    if(getRandomInt(0, 1)){
        const randomLabelIndex = times(getRandomInt(1, LABELS.length), index => {
            return getRandomInt(1, LABELS.length);
        });

        labels = times(randomLabelIndex.length, index => {
            return LABELS[randomLabelIndex[index]];
        });
    }
    

    const getPastDateRandom = getRandomInt(1, 10);
    const startDate = getRandomInt(0, 1)? moment(faker.date.past(getPastDateRandom)): undefined;
    let endDate = getRandomInt(0, 1)? moment(faker.date.future(getPastDateRandom)): undefined;
    //const endDate = moment().subtract(1, 'day');

    if(endDate && getRandomBoolean()){
        endDate = moment().subtract(1, 'day');
    }

    const isCompleted = getRandomInt(0, 1)? true: false;
    let completedOn;
    if(isCompleted){
        statusId = "completed";
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
            subtask:subtaskObj,
            attachment:attachmentObj,
            comment: {
                total: getRandomInt(0, 10)
            }
        }
    }
})
