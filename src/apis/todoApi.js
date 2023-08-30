import api from "./api";

export const getTodoTasks =() => {
    return api.get(`/todos`);
}
export const toggleTodoTask = (id, todoItem) => {
	return api.put(`/todos/${id}`, todoItem);
}
export const addTodoTask = (todoItem) => {
	return api.post(`/todos`, todoItem);
}
export const deleteTodoTask=(id) =>{
    return api.delete(`/todos/${id}`);
}
export const updateTodoTask = (id, todoItem) => {
	return api.put(`/todos/${id}`, todoItem);
}