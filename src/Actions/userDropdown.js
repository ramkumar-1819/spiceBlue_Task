import axios from 'axios';
import { hardCoded } from './hardCodedValues';
//userDropDown - this action for getting userDown.
export const userDropDown=()=>async(dispatch)=>{
    try{
        let options = {
            method: 'GET',
            url: `https://stage.api.sloovi.com/team?company_id=${hardCoded.company_id}&product=outreach`,
            headers: {
                'Authorization': 'Bearer '+ hardCoded.access_token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const userList=await axios(options)
        const dropDownList=[]
        userList.data.results.data.forEach(datas=>{
                if(datas.user_status==='accepted'){
                    dropDownList.push({name:datas.name,id:datas.user_id})
                }
        })
        dispatch({type:'updateDropDown',list:dropDownList})
    }
    catch(err){
        console.log(err)
    }
}