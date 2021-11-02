import { FC, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { addTodo, deleteTodo, Todo } from './types';

const initialTodos:Array<Todo>=[{
  task:"task1",done:false,id:1
}]

function App() {
  const [tasList, setTasList] = useState(initialTodos)
  
  
   const addTodo:addTodo=(newTask)=>{
     setTasList([...tasList, {task:newTask,done:false,id:Math.random()}])
   }

   const deleteTodo:deleteTodo=(id)=>{
       setTasList(tasList.filter(el=>el.id!==id))
   }



  return (
    <div>
       <AddTodo addTodo={addTodo} />
       <TodoList deleteTodo={deleteTodo} taskList={tasList}/>
    </div>
  );
}

export default App;
