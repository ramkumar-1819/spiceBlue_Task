import React, { Component } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { hardCoded } from '../../Actions/hardCodedValues'; //contain token,user_id,company_id.
import './allTasks.css';

export default function AllTasks(props){
    //allTask - get all tasks from store.
    const allTask=useSelector(state=>state.allTask)
    const dispatch=useDispatch()
    //editTask - when Edit button is clicked we need to show addTask component with defaultValues.
    const editTask=(index)=>{
        document.getElementById('addTasks').style.display='block';
        document.getElementById('allTasks').style.display='none';
        document.getElementById('deleteTask').style.visibility='visible';
        dispatch({type:'updateDefaultValues',updatedvalues:allTask[index]}) //dispatch for store to hold selected task datas.
    }
    return(
        <div id='allTasks'>
            {allTask.map((data,index)=>{
                return(
                    <div key={index} className='taskDetails'>
                        <img src={hardCoded.default_dp} alt="user_dp"/>
                        <div className='date_description'>
                            <div>{data.task_msg}</div>
                            <div>{data.task_date}</div>
                        </div>
                        <div onClick={()=>editTask(index)}>🖉
                            <div className='editTaskToolTip'>Edit Task</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}