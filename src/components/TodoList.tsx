import { deleteTodo, Todo } from '../types'
import TodoCard from './TodoCard'

type TaskList={
    taskList:Todo[],
    deleteTodo:deleteTodo
}


const TaskList = (props:TaskList) => {
    return (
        <div>
            {props.taskList.map(el=> <TodoCard todo={el} key={el.id} deleteTodo={props.deleteTodo} /> )}
        </div>
    )
}

export default TaskList
