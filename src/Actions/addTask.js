import axios from 'axios';
import { hardCoded } from './hardCodedValues';
import { allTasks } from './allTasks';
//addTasks - make api request and dispatching allUser() action after adding/updating task.
export const addTasks=(body,callBack)=>async(dispatch)=>{
    try{
        let options = {
            method: 'POST',
            url: `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${hardCoded.company_id}`,
            headers: {
                'Authorization': 'Bearer '+ hardCoded.access_token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:body
        };
        await axios(options)
        dispatch(allTasks(callBack))
    }
    catch(err){
        console.log(err)
    }
}