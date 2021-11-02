import React, { FC } from 'react'
import { deleteTodo, Todo } from '../types'
import "./TodoCard.css"
type TodoCard={
    todo:Todo,
    deleteTodo:deleteTodo
}



const TodoCard:FC<TodoCard> = ({todo,deleteTodo}) => {
 const handleDelete=()=>{
     deleteTodo(todo.id)
 }

    return (
       
            <ul className="todo">
                <li>{todo.task}</li>
                <button className="delete-btn" onClick={handleDelete}>X</button>
            </ul>
      
    )
}

export default TodoCard
