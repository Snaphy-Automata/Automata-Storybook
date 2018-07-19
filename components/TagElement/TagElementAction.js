export const ON_ADD_BUTTON_CLICKED = "on_add_button_clicked";
export const OPTIONS_LIST         = "options_list";
export const ON_ADD_TAG_ELEMENT = "on_add_tag_element";

export function onAddButtonClickedAction(isButtonClicked){
    return (dispatch) => {
        dispatch({
            type : ON_ADD_BUTTON_CLICKED,
            payload : isButtonClicked
        })
    }

}


export function addOptionsAction(optionData){
    return (dispatch) => {
        dispatch({
            type : OPTIONS_LIST,
            payload: optionData
        })
    }
}


export function addTagElementAction(tagObj){
    return(dispatch) => {
        dispatch({
            type : ON_ADD_TAG_ELEMENT,
            payload: tagObj
        })
    }
}


