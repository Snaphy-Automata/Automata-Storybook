import React from 'react';
import PropTypes from 'prop-types';

//Custom Import

import "./Button.css";


const Button = ({comp, onClick})=>{

    return (
        <div onClick={onClick}>
            {comp}
        </div>
    )
};


Button.propTypes = {
    //GridView data fetched using GraphQL
    //GridView ROuter..
    // match: PropTypes.shape({
    //     params: PropTypes.shape({
    //         projectId: PropTypes.string.isRequired,
    //         projectSlug: PropTypes.string.isRequired,
    //     }),
    // }).isRequired,
  }


export default Button;