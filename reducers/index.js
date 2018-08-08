import { reducer as formReducer } from 'redux-form';

import ButtonReducer         from '../components/Button/ButtonReducer';
import GanttChartReducer     from '../components/GanttChart/GanttChartReducer';
import TaskListReducer       from '../components/TaskList/TaskListReducer';
import InputElementReducer   from '../components/InputElement/InputElementReducer';
import TagElementReducer     from '../components/TagElement/TagElementReducer';
import LabelDialogReducer    from '../components/LabelDialog/LabelDialogReducer';
import DatePickerReducer     from '../components/DatePickerElement/DatePickerReducer';
import TaskSectionsReducer   from '../components/TaskSections/TaskSectionsReducer';
import ModelDataReducer      from '../components/ModelData/ModelDataReducer';


export default {
    form: formReducer,
    ButtonReducer,
    GanttChartReducer,
    TaskListReducer,
    InputElementReducer,
    TagElementReducer,
    LabelDialogReducer,
    DatePickerReducer,
    TaskSectionsReducer,
    ModelDataReducer
};

