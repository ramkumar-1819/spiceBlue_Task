//this reducer for setting the dropDown.
const dropDownList=(state=[],action)=>{
    switch(action.type){
        case 'updateDropDown':
            return action.list
        default:
            return state
    }
}
export default dropDownList;