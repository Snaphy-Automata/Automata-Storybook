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


const store = configureStore();


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