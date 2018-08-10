import { reducer as formReducer } from 'redux-form';

import ButtonReducer         from '../components/Button/ButtonReducer';
import GanttChartReducer     from '../components/GanttChart/GanttChartReducer';
import TaskListReducer       from '../components/TaskList/TaskListReducer';
import InputElementReducer   from '../components/ReduxForm/InputElement/InputElementReducer';
import LabelDialogReducer    from '../components/LabelDialog/LabelDialogReducer';
import ModelDataReducer      from '../components/ModelData/ModelDataReducer';


export default {
    form: formReducer,
    ButtonReducer,
    GanttChartReducer,
    TaskListReducer,
    InputElementReducer,
    LabelDialogReducer,
    ModelDataReducer
};

