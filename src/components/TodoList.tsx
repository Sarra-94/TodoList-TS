import { Todo } from '../types'
import TodoCard from './TodoCard'

type TaskList={
    taskList:Todo[]
}


const TaskList = (props:TaskList) => {
    return (
        <div>
            {props.taskList.map(el=> <TodoCard todo={el} /> )}
        </div>
    )
}

export default TaskList
