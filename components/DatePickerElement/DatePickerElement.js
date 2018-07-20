import React from 'react';
import {connect} from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import moment from 'moment';

//Custom Import 
import InputWithIcon from './InputWithIcon';
import IconLabel    from '../IconLabel';

//import Action..
import {onOpenDatePickerAction, setDateAction} from './DatePickerAction';

const DatePickerElement = (props) => {
    const {
        isDatePickerOpened,
        onOpenDatePickerAction,
        setDateAction, 
        dateData
    } = props;

    const onOpenDataPicker = function(){
        onOpenDatePickerAction(true);
    }

    function parseDate(str, format, locale) {
        const parsed = dateFnsParse(str, format, { locale });
        if (DateUtils.isDate(parsed)) {
          return parsed;
        }
        return undefined;
      }
      
      function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
      }

      const FORMAT = 'DD/MM/YYYY';

      const onDayChanged = function(day){
          console.log("Day Changed", day);
          onOpenDatePickerAction(false);
          let date =  moment(day).format("DD MMMM")
          setDateAction(date);
      }

      const getDate = function(){
          let value;
          if(dateData){
              value = dateData;
          } else{
              value = "Start Date";
          }
          return value;
      }

      const getData = function(){
          let value;
          if(dateData){
              value = "20/07/2018"
          }
          console.log("Value", value);
          return value;
      }


    return (
        <div>
            {isDatePickerOpened && <DayPickerInput
            component={InputWithIcon}
            showOverlay
            formatDate={formatDate}
            format={FORMAT}
            parseDate={parseDate}
            placeholder="DD/MM/YYYY"
            onDayChange={onDayChanged}
            />}
            {!isDatePickerOpened &&  <IconLabel size="tiny" icon="calendar minus outline" name={getDate()} onClick={onOpenDataPicker}></IconLabel>}
        </div>
       
        // <DayPickerInput 
        //     component={props => <input {...props} />}
        //     onDayChange={day => console.log(day)} />

    )
}

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        isDatePickerOpened : store.DatePickerReducer.isDatePickerOpened,
        dateData : store.DatePickerReducer.dateData
    };
}


//Map Redux Actions to Props..
const mapActionsToProps = {
  //map action here
  onOpenDatePickerAction,
  setDateAction
};

export default connect(mapStateToProps, mapActionsToProps)(DatePickerElement);