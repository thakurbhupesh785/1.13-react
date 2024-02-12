import React, {useState} from 'react'

function ToDoList () {

  const [tasks, setTasks] = useState(['eat dinner','watch youtube','wash dishes','watch anime']);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== '') {
      setTasks(t=>[...t,newTask]);
      setNewTask('');
    }
  }
  function removeTask(index) {
    const updateTasks = tasks.filter((_,i) => i!== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index>0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index-1]] = 
      [updateTasks[index-1], updateTasks[index]];
      setTasks(updateTasks)
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length -1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index+1]] = 
      [updateTasks[index+1], updateTasks[index]];
      setTasks(updateTasks)
    }
  }

  return(
    <div className='container'>
      <h1>To DO List</h1>
      <div>
        <input placeholder='Enter the task' value={newTask} onChange={handleInputChange} id='input' />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>

      <ol>
    {tasks.map((task, index) =>
    <li key={index}>
      <span className='text'>{task}</span>
      <button className='delete-button' onClick={() =>removeTask(index)}>Remove</button>
      <button className='move-button' onClick={() =>moveTaskUp(index)}>Up</button>
      <button className='move-button' onClick={() =>moveTaskDown(index)}>Down</button>
    </li>
    )}
    </ol>

    </div>)
}

export default ToDoList