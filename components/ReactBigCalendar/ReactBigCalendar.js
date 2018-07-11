import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';


//Style
import 'react-big-calendar/lib/css/react-big-calendar.css';


//Custom Import
import events from './events';
import "./ReactBigCalendar.css";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])


console.log(events);
const ReactBigCalendar = (props)=>{
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
  return (
        <div style={{height: '200px'}}>
            <BigCalendar
            events={events}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 1)}
            startAccessor='startDate'
            endAccessor='endDate'
          />
        </div>
          
      
  )
};


ReactBigCalendar.propTypes = {
    //GridView data fetched using GraphQL
    //GridView ROuter..
    // match: PropTypes.shape({
    //     params: PropTypes.shape({
    //         projectId: PropTypes.string.isRequired,
    //         projectSlug: PropTypes.string.isRequired,
    //     }),
    // }).isRequired,
}

//   // Retrieve data from store as props
// function mapStateToProps(store) {

//   return {

//   }    
// }


// //Map Redux Actions to Props..
// const mapActionsToProps = {
//   //map action here
  
// };

  
  
  
  
// export default connect(mapStateToProps, mapActionsToProps)(ReactBigCalendar);
export default ReactBigCalendar;