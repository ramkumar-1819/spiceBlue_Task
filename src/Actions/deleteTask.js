import axios from 'axios';
import { hardCoded } from './hardCodedValues';
import { allTasks } from './allTasks';
//deleteTasks - making api request and dispatching allTask() action.
export const deleteTasks=(id)=>async(dispatch)=>{
    console.log(id)
    try{
        let options = {
            method: 'DELETE',
            url: `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${hardCoded.company_id}`,
            headers: {
                'Authorization': 'Bearer '+ hardCoded.access_token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        await axios(options)
        dispatch(allTasks())
    }
    catch(err){
        console.log(err)
    }
}