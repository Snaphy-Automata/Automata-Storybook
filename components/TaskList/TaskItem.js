import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Input } from 'semantic-ui-react'
import moment from 'moment';

import './TaskList.css';
import TeamCircleIcon from '../TeamCircleIcon'
import Label from '../Label';

const TaskItem = ({ title, icon, status, subTask, attachment, dueDate, isNew }) => {

    const getDuedate = function () {
        let data;
        if (moment().format("DD MMMM YYYY") === moment(dueDate.date).format("DD MMMM YYYY")) {
            data = "Today"
        } else if (moment().subtract(1, 'days').format("DD MMMM YYYY") === moment(dueDate.date).format("DD MMMM YYYY")) {
            data = "Yesterday"
        } else if (moment().add(1, 'days').format("DD MMMM YYYY") === moment(dueDate.date).format("DD MMMM YYYY")) {
            data = "Tommorow"
        } else {
            let dueDateArray = moment(dueDate.date).format("DD MMMM YYYY").split(" ");
            data = dueDateArray[0] + " " + dueDateArray[1];
        }
        return data;
    }


    const isDelayedDate = function () {
        //Check for previous delayed dates..
        let isDelayed
        if(dueDate){
            var isAfter = moment().isAfter(dueDate.date);
            if (isAfter) {
                isDelayed = true;
            } else {
                isDelayed = false;
            }
        }
       
        return isDelayed;
    }

    const getDelayedColor = function () {
        let delayedColor;
        if(dueDate){
            var isAfter = moment().isAfter(dueDate.date);
            if (isAfter) {
                delayedColor = "#ff1744"
            } else {
                delayedColor = "#ffffff"
            }
        } else{
            delayedColor = "#ffffff"
        }
       
        return delayedColor;
    }



    //console.log("Due Date Value", getDuedate(), moment().subtract(1, 'days').format("DD MMMM YYYY"), getDelayedColor());
    return (
        <div style={{ marginTop: "2px", width: "100%", borderStyle: "solid", borderWidth: "0px 0px 0px 2px", borderColor: getDelayedColor() }}>
            <div className="task-list-item-container">
                <div className="task-list-item-side-line">
                    <div className="task-list-item-drag-icon">
                        <Icon name="compress"></Icon>
                    </div>

                </div>
                <div className="task-list-item-icon">
                    {icon.title && <TeamCircleIcon size="mini" title={icon.title} onClick={() => { console.log("Icon has been clicked") }}></TeamCircleIcon>}
                    {icon.icon && <TeamCircleIcon size="mini" icon={icon.icon} onClick={() => { console.log("Icon has been clicked") }}></TeamCircleIcon>}
                    {icon && <TeamCircleIcon size="mini" icon={icon} onClick={() => { console.log("Icon has been clicked") }}></TeamCircleIcon>}
                </div>

                {!isNew && <div className="task-list-item-title">{title}</div>}
                {isNew && <Input transparent placeholder="Write Task" autoFocus></Input>}
                {!isNew && <div>
                    <div className="task-list-item-status" style={{ color: status.color }}>{status.title}</div>
                    <div className="task-list-item-sub-task-attachment-container">
                        {subTask && <div style={{ display: "inline" }}>
                            <Icon name="unordered list" style={{ display: "inline" }}></Icon>
                            <div style={{ display: "inline", marginLeft: "5px" }}>{subTask.completed}/{subTask.total}</div>
                        </div>}
                        {attachment && <div style={{ display: "inline", marginLeft: "20px" }}>
                            <Icon name="attach" style={{ display: "inline" }}></Icon>
                            <div style={{ display: "inline", marginLeft: "5px" }}>{attachment}</div>
                        </div>
                        }
                    </div>
                    <div className="task-list-item-tags-container">
                        <div style={{ display: "inline" }}>
                            <div style={{ display: "inline" }}>
                                <Label title="Bug" color="#ff9b00"></Label>
                            </div>
                            {/* <div style={{display: "inline"}}>
                                    <Label title="..."></Label>
                            </div> */}
                        </div>

                    </div>
                    <div className="task-list-item-date-container">
                        {getDuedate() === "Today" &&
                            <div>
                                <Icon name="calendar minus outline" style={{ display: "inline" }}></Icon>
                                <div style={{ display: "inline", marginLeft: "5px", color: "#1ed0c1" }}>{getDuedate()}</div>
                            </div>
                        }
                        {getDuedate() === "Yesterday" &&
                            <div>
                                <Icon name="calendar minus outline" style={{ display: "inline" }}></Icon>
                                <div style={{ display: "inline", marginLeft: "5px", color: "#ff1744" }}>{getDuedate()}</div>
                            </div>
                        }
                        {getDuedate() === "Tommorow" &&
                            <div>
                                <Icon name="calendar minus outline" style={{ display: "inline" }}></Icon>
                                <div style={{ display: "inline", marginLeft: "5px", color: "#1ed0c1" }}>{getDuedate()}</div>
                            </div>
                        }
                        {getDuedate() !== "Today" && getDuedate() !== "Yesterday" && getDuedate() !== "Tomorrow" && isDelayedDate() === false &&
                            <div>
                                <Icon name="calendar minus outline" style={{ display: "inline" }}></Icon>
                                <div style={{ display: "inline", marginLeft: "5px", color: "#9e9e9e" }}>{getDuedate()}</div>
                            </div>
                        }
                        {getDuedate() !== "Today" && getDuedate() !== "Yesterday" && getDuedate() !== "Tomorrow" && isDelayedDate() === true &&
                            <div>
                                <Icon name="calendar minus outline" style={{ display: "inline" }}></Icon>
                                <div style={{ display: "inline", marginLeft: "5px", color: "#ff1744" }}>{getDuedate()}</div>
                            </div>
                        }




                    </div>
                </div>}

            </div>


        </div>
    )
}

export default TaskItem;

