import { useDispatch } from "react-redux";
import * as todoApi from "./../apis/todoApi";
import { resetTodoTask } from "../components/todoListSlice";

export const useTodos = () => {
    const dispatch = useDispatch();
    async function loadTodos() {
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
    }
    async function toggleItem(id,todoItem) {
        await todoApi.updateTodoTask(todoItem.id, {
            done: !todoItem.done,
        });
        loadTodos();
    }
    async function deleteItem(id){
        await todoApi.deleteTodoTask(id);
        loadTodos();
    }
    async function addItem(todoItem){
        await todoApi.addTodoTask(todoItem);
        loadTodos();
    }
    async function updateItem(id,textToUpdate) {
        await todoApi.updateTodoTask(id, {
            text: textToUpdate
        });
        loadTodos();
    }
    
    return {
        loadTodos,
        toggleItem,
        deleteItem,
        addItem,
        updateItem
    }

}