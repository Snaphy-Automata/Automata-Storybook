import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

//Custom Import
import Button from '../components/Button';
import configureStore from '../store/configureStore';
import ReactBigCalendar from '../components/ReactBigCalendar';

const store = configureStore();


storiesOf('Button', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('ReactBigCalendar', ()=> {
        
    return (
        <ReactBigCalendar></ReactBigCalendar>
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