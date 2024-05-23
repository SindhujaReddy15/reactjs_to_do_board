import Input from './Components/Input';
import Board from './Components/Board';
import { useState } from 'react';
import './App.css';

function App() {
const [taskList,setTaskList] = useState([]);

  return (
    <>
    <div className='heading'>
    <h1 >To Do Board</h1>
    <Input taskList={taskList} setTaskList={setTaskList} />
    </div>
    <div className='format'>
      {taskList.map((task, index) =>
      <Board
      key={index}
      task={task}
      />
      )}
    
    </div>
    </>
  );
}

export default App;
