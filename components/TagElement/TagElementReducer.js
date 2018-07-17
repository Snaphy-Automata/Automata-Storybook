import {
    ON_ADD_BUTTON_CLICKED,
    OPTIONS_LIST
} from './TagElementAction';


const initialState = {
    isButtonClicked : false,
    optionList : [ 
        {key: 'English', text: 'English', value: 'English'},
        {key: 'Spanish', text: 'Spanish', value: 'Spanish'}
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
    }
    return state;
}


export default TagElementReducer;