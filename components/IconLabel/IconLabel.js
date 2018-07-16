import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Icon, Button } from 'semantic-ui-react'


import './IconLabel.css';

import TeamCircleIcon from '../TeamCircleIcon';

const IconLabel = ({size, icon, title, name, isLabel}) => {
    return(
        <div>
            <div className="label-icon-container">
                <div style={{display:'inline-block', float:"left"}}>
                    {title && <TeamCircleIcon size={size} style={{backgroundColor:"#dddddd"}} title={title} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>}
                    {icon && <TeamCircleIcon size={size} style={{backgroundColor:"#dddddd"}} icon={icon} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>}
                </div>
                <div className="label-icon-name-container">{name}</div>

                {isLabel && <div className="label-icon-cross-button-container">
                    <Icon name="close"></Icon>
                </div>
                }

            </div>
        </div>
       
    )
}

IconLabel.propTypes = {

}


export default IconLabel;

