export type Todo={
    task:string,
    done:boolean,
    id:number
}
export type addTodo=(newTask:string)=>void