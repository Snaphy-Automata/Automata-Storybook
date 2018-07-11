import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Custom Import

import "./ReactBigCalendar.css";


const ReactBigCalendar = (props)=>{

    return (
        <div>
            Working on React Big Calendar.
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

  // Retrieve data from store as props
function mapStateToProps(store) {

    
}


//Map Redux Actions to Props..
const mapActionsToProps = {
//map action here

};

  
  
  
  
export default connect(mapStateToProps, mapActionsToProps)(ReactBigCalendar);
