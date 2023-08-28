import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = props.todoItems;
    return todoItems.map((todoItem, index) => {
        return <TodoItem itemDescription={todoItem} key={index} />;
    });
};

export default TodoGroup;
