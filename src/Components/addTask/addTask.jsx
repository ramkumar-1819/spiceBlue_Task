import axios from 'axios';
import React, { Component,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { hardCoded } from '../../Actions/hardCodedValues';
import { addTasks } from '../../Actions/addTask';       //action for addingTask.
import { updateTasks } from '../../Actions/updateTask'; //action for updatingTask.
import { deleteTasks } from '../../Actions/deleteTask'; //action for deletingState.
import { min_date,time_seconds } from './date_time';    //this is some features that be used in our component.

export default function AddTasks(){
    //dropDown - get list of options for assigned user field.
    //defaultTaskValues - hold defaultValues for input fields if you perform edit operation.
    //timeString - hold selected time in seconds.
    const dropDown=useSelector(state=>state.dropDown)
    const defaultTaskValues=useSelector(state=>state.defaultTaskValues);
    const dispatch=useDispatch()
    let timeString;
    if(defaultTaskValues.task_time!==""){
        timeString = time_seconds(defaultTaskValues.task_time)
    }
    else{
        timeString=""
    }
    //useEffect - for setting the input field with  defaultvalues.
    //Render everytime the defaultValue is Changed.
    useEffect(()=>{
        document.getElementById('description').value=defaultTaskValues.task_msg;
        document.getElementById('date').value=defaultTaskValues.task_date;
        document.getElementById('time').value=timeString;
        if(defaultTaskValues.assigned_user!==""){
            document.getElementById('user').value=defaultTaskValues.assigned_user;
        }
        else if(defaultTaskValues.assigned_user==="" && dropDown.length>0){
            document.getElementById('user').value=dropDown[0].id;
            //show delete icon if editing is performed.
            document.getElementById('deleteTask').style.visibility='hidden';
        }
        else{
            document.getElementById('deleteTask').style.visibility='hidden';
        }
    },[defaultTaskValues])

    //hideAddTasks - when cancel button is clicked,
    //save the defaultValues of I/P with exist value not changed value of I/P,
    //and show the allTasks and hide the addTask component. 
    const hideAddTasks=()=>{
        document.getElementById('addTasks').style.display='none';
        document.getElementById('allTasks').style.display='block';
        document.getElementById('description').value=defaultTaskValues.task_msg;
        document.getElementById('date').value=defaultTaskValues.task_date;
        document.getElementById('time').value=timeString;
        document.getElementById('user').value=document.getElementById('user').value;
    }
    //createOrUpdateTask - when you update or create task,
    //this method perform client side validation and perform sideEffects.
    const createOrUpdateTask=(e)=>{
        e.preventDefault()
        const description=document.getElementById('description');
        const date=document.getElementById('date');
        const time=document.getElementById('time');
        const user=document.getElementById('user')
        if(date.value===""){
            alert('Select Date')
            date.focus()
            return
        }
        else if(time.value===""){
            alert('Enter Time')
            time.focus()
            return
        }
        else if(user.value===""){
            alert('Assign user')
            user.focus()
            return
        }
        let task_time; //hold task time in seconds.
        let time_zone; //hold the time_zone in seconds.
        let is_completed; //0

        //defaultTaskValues.assigned_user==="" means addingTask else updatingTask.
        if(defaultTaskValues.assigned_user===""){
            task_time=time.value.split(':')
            task_time=Number(task_time[0]*3600)+Number(task_time[1]*60)
            time_zone=Math.abs(new Date().getTimezoneOffset()*60)+task_time;
            is_completed=0
        }
        else{
            task_time=defaultTaskValues.task_time;
            time_zone=defaultTaskValues.time_zone
            is_completed=defaultTaskValues.is_completed
        }
        //task_body - body for adding or updating tasks.
        const task_body={
                assigned_user: hardCoded.user_id , 
                task_date:date.value,
                task_time:task_time,
                is_completed:is_completed,
		        time_zone:time_zone,
                task_msg: description.value
        }
        //make api request based on action you perform (update/add task). 
        if(defaultTaskValues.assigned_user===""){
            dispatch(addTasks(task_body,hideAddTasks))
        }
        else{
            dispatch(updateTasks(defaultTaskValues.id,task_body))
        }
        //hideAddTasks - after action performed move to allTask component.
        hideAddTasks()
    }
    //removeTask - to delete the task.
    const removeTask=()=>{
        if(window.confirm('Are you sure to delete the task?')){
            dispatch(deleteTasks(defaultTaskValues.id))
            hideAddTasks()
        }        
    }
    return(
        <form id='addTasks' onSubmit={createOrUpdateTask}>
                <div>
                    <label htmlFor="description">Task Description</label>
                    <input type='text' id='description' required autoComplete='off'/>
                </div>
                <div className='date_time'>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type='date' id='date' min={min_date}/>
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type='time' id='time'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="user">Assign User</label>
                    <select id='user'>
                        {dropDown.map((data,index)=><option key={index} value={data.id}>{data.name}</option>)}
                    </select>
                </div>
                <div className='buttons'>
                    <button type='button' id='deleteTask' onClick={removeTask}>🗑</button>
                    <div>
                        <button type='button' onClick={hideAddTasks}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </div>
            </form>
    )
}