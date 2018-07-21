import React from 'react';
import {Field, reduxForm} from 'redux-form';

import DatePicker from './DatePicker';

const DatePickerForm = () =>{

    return (
        <Field width={6} inline  required name="dateValue" component={DatePicker} placeholder="Select Date"></Field>
    )

}

const DatePickerReduxForm = reduxForm({
    form: "Date Form"
})(DatePickerForm);


export default DatePickerReduxForm;