import {combineReducers} from 'redux';
import taskDefaultValues from './taskDefaultValues';
import dropDownList from './dropDownList';
import allCreatedTask from './allCreatedTasks';

const rootReducers=combineReducers({
    defaultTaskValues:taskDefaultValues,
    dropDown:dropDownList,
    allTask:allCreatedTask
})
export default rootReducers;