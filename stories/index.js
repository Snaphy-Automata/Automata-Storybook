import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import moment from "moment";

import 'semantic-ui-css/semantic.min.css';

//Custom Import
import Button            from '../components/Button';
import configureStore    from '../store/configureStore';
import GanttChart        from '../components/GanttChart';
import TeamCircleIcon    from '../components/TeamCircleIcon';
import TaskList          from '../components/TaskList';
import Label             from '../components/Label';
import TaskDetail        from '../components/TaskDetail';
import IconLabel         from '../components/IconLabel';
import Description       from '../components/Description';
import CustomCheckbox    from '../components/CustomCheckbox';
import SubTask           from '../components/TaskDetail/SubTask';
import TaskAttachment    from '../components/TaskDetail/TaskAttachment';
import InputElement      from '../components/InputElement';
import TaskItem          from '../components/TaskList/TaskItem';
import SelectLabel       from '../components/SelectLabel';
import TagContainer      from '../components/TagContainer';
import OverFlowLabel     from '../components/OverFlowLabel';
import LabelDialog       from '../components/LabelDialog';
import ShareDialog       from '../components/ShareDialog';
import CircularLabel        from '../components/CircularLabel';
import AssignedUserDialog   from '../components/AssignedUserDialog';
import ChangeDateDialog     from '../components/ChangeDateDialog';
import VirtualList          from '../components/TaskList/VirtualList';
import AllTasks             from '../components/AllTasks';
//import DurationForm         from '../components/DurationForm';



//Data
import ganttFakeData     from '../data/generateGanttFakeData'; 
import ALL_DATA from '../data/taskListData';

const store = configureStore();



const optionList = [
  {key : "Nikita Mittal", text:"Nikita Mittal", value: "Nikita Mittal"},
  {key : "Mitsu Nohara", text: "Mitsu Nohara", value : "Mitsu Nohara"},
  {key : "Sakura", text: "Sakura", value: "Sakura"}
]


const totalLabelItemList = [
  {name: "Issue", isSelected: false, color:"#d55fe0"},
  {name: "Bug", isSelected: true, color : "#ff9b00"},
  {name: "Name", isSelected: false, color : "#00c5e4"}
]

const totalUserItemList = [
  {name: "Mitsu Nohara", isSelected: false},
  {name: "Sakura", isSelected: true},
  {name: "Nora Irie", isSelected: false}
]

//const selectedOptionList = 




storiesOf('GanttChart', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('GanttChart', ()=> {   

    const onResize = (itemId, time, edge) => {
      console.log("On Resize");
    }

    const onItemMoved=(itemId, dragTime, newGroupOrder) => {
      console.log("On Date change");
    }


    return (
        <GanttChart  onTaskResized={onResize} onItemMoved={onItemMoved} tasks={ganttFakeData()}></GanttChart>
    );
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
.add('With Image', ()=>{
  return (
    <TeamCircleIcon size="tiny" src="dcdc" onClick={()=>{console.log("Item Has been clicked")}}></TeamCircleIcon>
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
      <TaskList allData={ALL_DATA}></TaskList>
  )
})
.add('Custom Section', ()=>{
  return (
    <TaskList allData={ALL_DATA}></TaskList>
  )
})
.add('With Items', ()=>{
  return (
    <TaskList allData={ALL_DATA}></TaskList>
  )
})
.add('With Virtual Items', ()=>{
   return (
     <VirtualList allData={ALL_DATA}></VirtualList>
   )
 })

.add('With Items Compressed', ()=>{
  return(
    <div style={{width:'772px'}}>
      <TaskList heading="Active Tasks" sectionId="1" onArchiveClicked={()=>{console.log("Archive has been clicked")}} onNewTaskClicked={()=>{console.log("New Task has been Clicked")}}></TaskList>
    </div>
  )
})

storiesOf('Task Detail', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <TaskDetail></TaskDetail>
  )
})

.add('With Width', ()=>{
  return (
    <div style={{backgroundColor:"#f6f8f9", width: '1170px', height: '737px'}}>
      <div style={{width: '463px', float:'right', backgroundColor:"#ffffff"}}>
        <TaskDetail></TaskDetail>
      </div>
    </div>
    
  )
})

storiesOf("Label Icon", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('With User', ()=>{
  return (
    <IconLabel size="tiny" title="Nikita Mittal" name="Nikita Mittal" isLabel></IconLabel>
  )
})
.add('With Icon', ()=>{
  return (
    <IconLabel size="tiny" icon="calendar minus outline" name="Start Date"></IconLabel>
  )
})


storiesOf("Description", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <Description placeholder="Write Description Here" style={{ minHeight: '200px' }}></Description>
  )
})

storiesOf("Custom Checkbox", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <CustomCheckbox size='mini'></CustomCheckbox>
  )
})

.add('With Select', ()=>{
  return (
    <CustomCheckbox size='mini' isSelected = 'isSelected'></CustomCheckbox>
  )
})

storiesOf("SubTask", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <SubTask title="SubTask1" isSelected="isSelected"></SubTask>
  )
})

.add('Selected', ()=>{
  return (
    <SubTask title="Sub Task2" isSelected=""/>
  )
})

storiesOf("Task Attachment", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <TaskAttachment title="Screen Shot 2018-05-22 at 11.41.35 AM.pdf"></TaskAttachment>
  )
})


storiesOf("Input Element", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <InputElement></InputElement>
  )
})


storiesOf("Task Item", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('New Task', ()=>{
  return(
    <div>
      <TaskItem isNew></TaskItem>
    </div>
  )
})
.add('Task Data', ()=>{
  return (
    <div>
      <TaskItem task={items[0]} isActiveTaskSection  memberObj={memberObj} statusObj={statusObj} labelObj ={labelObj}></TaskItem>
      <TaskItem isNew/>
    </div>
      
  )
})

storiesOf("Select Label", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
      <SelectLabel type="add" name="Nikita Mittal"/>
  )
})

.add('With Select', ()=>{
  return (
    <SelectLabel type="add" name="Nikita Mittal" isSelected />
  )
})

.add('With Color', ()=>{
  return (
    <SelectLabel type="add" name="Issue" color="#ff9b00"/>
  )
})

.add("With Color Select", ()=>{
  return (
    <SelectLabel type="add" name="Backend" color="#d55fe0" isSelected/>
  )
})

.add("With Edit Icon", ()=>{
  return (
    <SelectLabel type="edit" name="Backend" color="#d55fe0" isSelected/>
  )
})


storiesOf("Tag Container", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <div style={{padding:10}}>
       <TagContainer/>
    </div>
   
  )
})
.add('With Label', ()=>{
  return (
    <div style={{padding:10}}>
       <TagContainer type="label" />
    </div>
  )
})

.add('With User', ()=>{
  return (
    <div style={{padding:10}}>
      <TagContainer type="user"/>
    </div>
  )
})

storiesOf("Over Flow Label", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add("With Color", ()=> {
  return (
    <OverFlowLabel name="New Issue" color="#00c5e4"/>
  )
})
.add("With Icon", ()=>{
  return(
    <OverFlowLabel name="Mitsu Nohara" src ="dsfcecf"/>
  )
})

storiesOf("Label Dialog", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add("Basic", ()=>{
  return (
    <LabelDialog></LabelDialog>
  )
})


storiesOf("Share Dialog", module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=> {
  return (
    <ShareDialog/>
  )
})


storiesOf('Circular Label', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return (
    <div style={{
      margin: "10px"
    }}>
      <CircularLabel colorCode="#ffc16233" title="yellow"/>
      <CircularLabel colorCode="#ff414133" title="red"/>
      <CircularLabel colorCode="#a177ff33" title="purple"/>
      <CircularLabel colorCode="#5ee2a033" title="green"/>
      <CircularLabel colorCode="#75818d" title="grey"/>
    </div>
  )
})
.add('Sizes', ()=>{
  return (
    <div style={{
      margin: "10px"
    }}>
      <div>
        Size = mini|tiny|small|large|big|huge|massive
      </div>
      <CircularLabel colorCode="#ffc16233" title="yellow"/>
      <CircularLabel size="mini" colorCode="#ff414133" title="red"/>
      <CircularLabel colorCode="#a177ff33" title="purple"/>
      <CircularLabel colorCode="#5ee2a033" title="green"/>
      <CircularLabel colorCode="#75818d" title="grey"/>
    </div>
  )
})

storiesOf('AssignedUser Dialog')
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', () => {
  return (
    <AssignedUserDialog/>
  )
})

storiesOf('Change Date Dialog')
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', () => {
  return (
    <ChangeDateDialog/>
  )
})



storiesOf("All Tasks")
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=> {
  return(
    // <TaskList allDate={ALL_DATA}></TaskList>
     <AllTasks></AllTasks>
  )
})


storiesOf("Duration Form")
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('Basic', ()=>{
  return(
    <DurationForm></DurationForm>
  )
})






