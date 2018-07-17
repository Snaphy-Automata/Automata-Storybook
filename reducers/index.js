import { reducer as formReducer } from 'redux-form';

import ButtonReducer from '../components/Button/ButtonReducer';
import GanttChartReducer from '../components/GanttChart/GanttChartReducer';
import TaskListReducer   from '../components/TaskList/TaskListReducer';
import InputElementReducer from '../components/InputElement/InputElementReducer';


export default {
    form: formReducer,
    ButtonReducer,
    GanttChartReducer,
    TaskListReducer,
    InputElementReducer
};

