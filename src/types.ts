// todo structure 
export type Todo={
    task:string,
    done:boolean,
    id:number
}
//  function add structure
export type addTodo=(newTask:string)=>void

export type deleteTodo=(id:number)=>void