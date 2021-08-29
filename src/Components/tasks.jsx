import React, { Component,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import AddTasks from './addTask/addTask';       //AddTask Component.
import AllTasks from './createdTasks/allTasks'; //AllTasks Component.
import './tasks.css';

export default function Tasks(){
    const dispatch=useDispatch()
    //numberOfTasks - get all the created tasks from store.
    const numberOfTasks=useSelector(state=>state.allTask)
    //showAddTasks - when createTask button clicked we need to show AddTask Component.
    const showAddTasks=()=>{
        document.getElementById('addTasks').style.display='block';
        document.getElementById('allTasks').style.display='none';
        dispatch({type:'setToDefaultValues'}) //In AddTask Component defaultValue of all input field is none.
    }
    return(
        <div id='taskSection'>
            <div className='taskHeader'>
                <div>TASKS - {numberOfTasks.length}</div>
                <div onClick={showAddTasks}>+
                    <div className='toolTip addTaskToolTip'>AddTask</div>
                </div>
            </div>
            <AllTasks/>
            <AddTasks/>
        </div>
    )
}
