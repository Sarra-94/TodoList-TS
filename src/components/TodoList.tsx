import { Todo } from '../types'

type TaskList={
    taskList:Todo[]
}


const TaskList = (props:TaskList) => {
    return (
        <div>
            {props.taskList.map(el=> <ul>
                <li>{el.task}</li>
            </ul> )}
        </div>
    )
}

export default TaskList
