import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

//Custom Import
import Button from '../components/Button';
import configureStore from '../store/configureStore';
import GanttChart from '../components/GanttChart';
import TeamCircleIcon from '../components/TeamCircleIcon';
import TaskList from '../components/TaskList';
import Label    from '../components/Label';


const store = configureStore();


const items = [
  {
    title : "This is the first issue to be solved",
    icon:{
      title : "Nikita",
      toolTip : "Nikita",
      onClick : "Items has been clicked"
    },
    status: {
      title: "Completed",
      color : "#1ed0c1"
    },
    subTask:{
      total : 9,
      completed: 4
    },
    attachment: 3,
    labels : [
      {title : "Bug", color : "#ff9b00", onClick:"Bug"}
    ],
    dueDate : {
      date : "2018-07-10T01:14:00Z",
      onClick : "Date has been clicked"
    }
  },
  {
    title : "Disable the button after clicking and then enable the button after getting response",
    icon: {
      icon : "users",
      toolTip : "Nikita, Mitsu, Sakura",
      onClick : "Items has been clicked"
    },
    status : {
      title : "In Progress",
      color : "#3b86ff"
    },
    subTask:{
      total : 15,
      completed : 10
    },
    attachment : 6,
    dueDate : {
      date : "2018-07-23T01:14:00Z",
      onClick : "Date has been clicked"
    }
  }
]




storiesOf('GanttChart', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('GanttChart', ()=> {   
    return (
        <GanttChart></GanttChart>
    )
  })
  .add('with text', () => (
    <Button onClick={action('clicked')} 
    comp={(<div>Hello Button</div>)}
    ></Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} comp={
        (<span role="img" aria-label="so cool">😀 😎 👍 💯</span>)
    }></Button>
  ));   


storiesOf('Team Icon', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=> {   
  return (
      <TeamCircleIcon title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
  )
})
.add('With Icon', ()=> {   
  return (
      <TeamCircleIcon icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
  )
})
.add('All Sizes', ()=> {  
  //size = mini | tiny | small | large | big | huge | massive; 
  return (
      <div>
        size = mini | tiny | small | large | big | huge | massive
        <div>
          With Icon
          <TeamCircleIcon size="mini" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="tiny" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="small" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="large" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="big" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="huge" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="massive" icon={'users'} onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
        </div>
        <div>
          With Text
          <TeamCircleIcon size="mini" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="tiny" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="small" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="large" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="big" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="huge" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
          <TeamCircleIcon size="massive" title="Robins" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
        </div>
      </div>
  )

 

})


storiesOf("Label", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <Label title="Issue" color="#0f0f4c"></Label>
  )
})
.add("Empty Label", ()=>{
  return (
    <Label title="..."></Label>
  )
})
.add("Over Flow Label", ()=>{
  return (
    <Label title="Staus Updated" color="#6f6fff"></Label>
  )
})


storiesOf('TaskList', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=> {   
  return (
      <TaskList heading="Active Tasks" onArchiveClicked={()=>{console.log("Archive has been clicked")}} onNewTaskClicked={()=>{console.log("New Task has been Clicked")}}></TaskList>
  )
})
.add('With Items', ()=>{
  return (
    <TaskList items = {items} heading="Active Tasks" isOpened onArchiveClicked={()=>{console.log("Archive has been clicked")}} onNewTaskClicked={()=>{console.log("New Task has been Clicked")}}></TaskList>
  )
})