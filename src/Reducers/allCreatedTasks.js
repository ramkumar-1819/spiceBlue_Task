//this reducer for setting allTasks.
const allCreatedTask=(state=[],action)=>{
    switch(action.type){
        case 'allTasks':
            return action.list
        default:
            return state
    }
}
export default allCreatedTask;