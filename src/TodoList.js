import React from "react"
import Todoitem from "./Todoitem";

const TodoList = ({todos}) => {
return (
<div>
    {todos.map(todo => (
    <Todoitem todo={todo} key={todo.id}/>
    ))}
</div>
);
};
export default TodoList