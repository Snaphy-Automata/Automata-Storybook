export const ON_ADD_BUTTON_CLICKED = "on_add_button_clicked";
export const OPTIONS_LIST         = "options_list";

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


