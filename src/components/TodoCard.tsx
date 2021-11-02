import React, { FC } from 'react'
import { Todo } from '../types'
import "./TodoCard.css"
type TodoCard={
    todo:Todo
}



const TodoCard:FC<TodoCard> = ({todo}) => {
    return (
       
            <ul className="todo">
                <li>{todo.task}</li>
                <button className="delete-btn">X</button>
            </ul>
      
    )
}

export default TodoCard
