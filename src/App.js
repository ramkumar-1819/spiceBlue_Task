import './App.css';
import Tasks from './Components/tasks';
import {useDispatch} from 'react-redux'; //for Dispatch action to change state.
import {userDropDown} from './Actions/userDropdown'; //this action perform async action and get list of users in dropdown.
import {allTasks} from './Actions/allTasks';//this action perform async action to get all tasks.

function App() {
  const dispatch=useDispatch()
  dispatch(userDropDown())     //Dispatch userDropDown() action to get list of users in dropdown and save it in store.
  dispatch(allTasks())         //Dispatch allTasks() action to get all created tasks and save it in store and visible to user.
  return (
    <div id='homePage'>
      <div className='sideBar'></div>
      <div className='mainSection'>
        <div className='topBar'></div>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
