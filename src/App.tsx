import { FC, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TaskList from './components/TodoList';
import { addTodo, Todo } from './types';

const initialTodos:Array<Todo>=[{
  task:"task1",done:false,id:1
}]

function App() {
  const [tasList, setTasList] = useState(initialTodos)
  
   const addTodo:addTodo=(newTask)=>{
     setTasList([...tasList, {task:newTask,done:false,id:Math.random()}])
   }

  return (
    <div>
       <AddTodo addTodo={addTodo} />
       <TaskList taskList={tasList}/>
    </div>
  );
}

export default App;
