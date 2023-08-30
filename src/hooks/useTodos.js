import { useDispatch } from "react-redux";
import * as todoApi from "./../apis/todoApi";
import { resetTodoTask } from "../components/todoListSlice";

export const useTodos = () => {
    const dispatch = useDispatch();
         async function loadTodos() {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
        }return{
            loadTodos
        }

}