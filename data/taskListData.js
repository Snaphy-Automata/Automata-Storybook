import faker from 'faker'
import moment from 'moment'
import times from "lodash/times";


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getRandomBoolean = ()=>{
    return Math.random() < 0.4;
}


const ALL_DATA = {
    user:{  
        byId:{
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
        },
        allIds:["user1", "user2"]
    },
    label:{
        byId:{

        },
        allIds:[]
    },
    status:{
        byId:{
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
        },
        allIds:["completed", "in_progress", "pending"]
    },
    section:{
        byId:{

        },
        allIds:[]
    },
    task:{
        byId:{

        },
        allIds:[]
    }
}


//Fetch Labels..
times(20, (index)=> {
    const title = faker.name.firstName();
    const id    = faker.random.uuid();
    const colorCode = faker.internet.color();
    ALL_DATA.label.byId[id] = {
        id,
        title,
        colorCode,
    };
    ALL_DATA.label.allIds.push(id);
});


const getTasks = (sectionId, limit) => {
    const taskList = [];
    times(limit, (index)=> {
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
            assignedTo = times(getRandomInt(1, ALL_DATA.user.allIds.length), index => {
                return ALL_DATA.user.allIds[index];
            });
        }
        
    
        let statusId = getRandomInt(0, 1)? ALL_DATA.status.allIds[getRandomInt(0, ALL_DATA.status.allIds.length-1)]: undefined;
        let labels = [];
        if(getRandomInt(0, 1)){
            const randomLabelIndex = times(getRandomInt(1, ALL_DATA.label.allIds.length), index => {
                return getRandomInt(1, ALL_DATA.label.allIds.length);
            });
    
            labels = times(randomLabelIndex.length, index => {
                return ALL_DATA.label.allIds[randomLabelIndex[index]];
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

        const taskObj = {
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
            sectionId,
            stats:{
                subtask:subtaskObj,
                attachment:attachmentObj,
                comment: {
                    total: getRandomInt(0, 10)
                }
            }
        };

        ALL_DATA.task.byId[taskObj.id] = taskObj;
        ALL_DATA.task.allIds.push(taskObj.id);
    
        taskList.push(taskObj);
    });

    return taskList;
}

const totalTaskIndex = 0;
const taskLimit = 3;

const sections = times(5, index => {
    const id = faker.random.uuid();
    const tasks = getTasks(id, taskLimit)
    const sectionObj = {
        id,
        title: faker.name.firstName(),
        tasks,
        isProtected: true,
    }
    
    

    ALL_DATA.section.byId[id] = sectionObj;
    ALL_DATA.section.allIds.push(id);
});


export default ALL_DATA;