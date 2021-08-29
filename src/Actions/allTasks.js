import axios from 'axios';
import { hardCoded } from './hardCodedValues';
//allTasks - make api request and sort allTask dispatch allTasks.
export const allTasks=()=>async(dispatch)=>{
    try{
        let options = {
            method: 'GET',
            url: `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${hardCoded.company_id}`,
            headers: {
                'Authorization': 'Bearer '+ hardCoded.access_token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const userSavedTasks=await axios(options)
        const allTasks=[]
        userSavedTasks.data.results.forEach(datas=>{
            allTasks.push(datas)
        })
        //sort all Task based on date and time.
        allTasks.sort((a,b)=>(new Date(a.task_date).getTime()+a.task_time*1000)-(new Date(b.task_date).getTime()+b.task_time*1000))
        dispatch({type:'allTasks',list:allTasks})
    }
    catch(err){
        console.log(err)
    }
}