import {
    ON_ADD_BUTTON_CLICKED,
    OPTIONS_LIST,
    ON_ADD_TAG_ELEMENT
} from './TagElementAction';


const initialState = {
    isButtonClicked : false,
    optionList : [ 
        {key: 'English', text: 'English', value: 'English'},
        {key: 'Spanish', text: 'Spanish', value: 'Spanish'}
    ],
    selectedTagItemList : [],
    totalTagItemList : [
        {name: "Issue", isSelected: false, color:"#d55fe0"},
        {name: "Bug", isSelected: false, color : "#ff9b00"},
        {name: "Name", isSelected: false, color : "#00c5e4"}
    ]
}

const TagElementReducer = (state = initialState, action) => {
    switch(action.type){
        case ON_ADD_BUTTON_CLICKED:{
            state = {
                ...state,
                isButtonClicked : action.payload
            }
            break;
        }
        case OPTIONS_LIST:{
            let optionDataList = state.optionList;
            if(!optionDataList){
                optionDataList = [];
            }
            optionDataList.push(action.payload);
            state = {
                ...state,
                optionList : optionDataList
            }
            break;
        }
        case ON_ADD_TAG_ELEMENT: {
          
            let totalItemDataList = [...state.totalTagItemList]
            if(!totalItemDataList){
                totalItemDataList = [];
            }
            for(var i=0;i<totalItemDataList.length;i++){
                if(totalItemDataList[i].name === action.payload.name){
                    totalItemDataList.splice(i, 1, action.payload);
                    break;
                }
            }
            let selectedTagDataList = [...state.selectedTagItemList]; 
            if(action.payload.isSelected){
               selectedTagDataList.push(action.payload);
            } else if(action.payload.isSelected === false){
                //console.log("data Unselected", selectedTagDataList, action.payload);
                for(var j=0;j<selectedTagDataList.length;j++){
                    if(selectedTagDataList[j].name === action.payload.name){
                        selectedTagDataList.splice(j, 1);
                       
                        break;
                    }
                }
            }
           

            state = {
                ...state,
                selectedTagItemList : selectedTagDataList,
                totalTagItemList : totalItemDataList
            }

            break;

        }
    }
    return state;
}


export default TagElementReducer;