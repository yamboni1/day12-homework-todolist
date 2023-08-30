import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "./../apis/todoApi";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { resetTodoTask } from "./todoListSlice";

const TodoList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
        }
        fetchData();
    },[]);
    // const todoItems = useSelector((state) => state.todoList.todoList);
    return (
        <>
            <h1>Todo List</h1>
            <TodoGroup  />
            <TodoGenerator />
            {/* todoItems={todoItems} isDone={props.isDone} */}
        </>
    );
};

export default TodoList;
