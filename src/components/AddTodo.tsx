import React,{FC} from 'react'
import { addTodo } from '../types'

type AddTask={
    addTodo:addTodo
}



const AddTask:FC<AddTask> = ({addTodo}) => {
    return (
            <div>
                
            </div>
    )
}

export default AddTask
