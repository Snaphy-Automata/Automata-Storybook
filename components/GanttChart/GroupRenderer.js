/**
 * Created by Robins Gupta
 * 23rd July 2018
 */

import React, { Component } from 'react';
import truncate from 'lodash/truncate';

//Custom Import
import TeamCircleIcon from "../TeamCircleIcon";

//Custom style
import "./GanttChart.css";

const GroupRenderer = ({group}) => {
    console.log(group);
    const title = truncate(group.title,{
        'length': 24,
       
    })
    return (
        <div className="gantt-chart-group-wrapper">
            <div style={{
                display: "inline-block"
            }}>
                <TeamCircleIcon size="mini" {...group.icon}></TeamCircleIcon>
            </div>
            <div style={{
                display: "inline-block"
            }}>
                <div className="gantt-chart-group-title"> {title}</div>
            </div>
        </div>
    )
};



export default GroupRenderer;