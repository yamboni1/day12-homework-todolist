import { useEffect } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useTodos } from "../hooks/useTodos";

const TodoList = (props) => {
    const{loadTodos} = useTodos();
    useEffect(()=> {loadTodos();},[])
        return (
            <div>
                <h1>Todo List</h1>
                <TodoGroup  />
                <TodoGenerator />
            </div>
        );
};

export default TodoList;
