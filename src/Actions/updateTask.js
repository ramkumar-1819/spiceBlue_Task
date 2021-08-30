import axios from 'axios';
import { hardCoded } from './hardCodedValues';
import { allTasks } from './allTasks';
//updateTasks - for making api request for updating Tasks and dispatch allTask() action.
export const updateTasks=(id,body,callBack)=>async(dispatch)=>{
    try{
        let options = {
            method: 'PUT',
            url: `https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${hardCoded.company_id}`,
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