/**
 * Created by Robins Gupta
 * 28th July 2018
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';

//Custom import..
import "./CircularLabel.css";

const CircularLabel = ({colorCode, title, style, className}) => {
    className = className || "";
    className = `circular-label-container ${className}`;
    return (
        <div style={style} className={className}>
            <div className="circular-label-circular-icon">

            </div>
            <div className="circular-label-circular-text">
                {title}
            </div>
        </div>
    )
}


CircularLabel.propTypes = {
   title: PropTypes.string.isRequired,
   colorCode: PropTypes.string.isRequired,
};


export default CircularLabel;