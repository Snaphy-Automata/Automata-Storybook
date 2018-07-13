import { reducer as formReducer } from 'redux-form';

import ButtonReducer from '../components/Button/ButtonReducer';
import GanttChartReducer from '../components/GanttChart/GanttChartReducer';


export default {
    form: formReducer,
    ButtonReducer,
    GanttChartReducer,
};

