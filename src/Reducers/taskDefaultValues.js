//taskDefaultValues - this reducer for setting defaultvalue to I/P field.
const initialValues={assigned_user:"" , task_date:"" , task_time:"" , time_zone:"" , task_msg:""}
const taskDefaultValues=(state=initialValues,action)=>{
    switch(action.type){
        case 'updateDefaultValues':
            return action.updatedvalues
        case 'setToDefaultValues':
            return initialValues
        default:
            return state
    }
}
export default taskDefaultValues;