import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
    const todoItems = props.todoItems.filter((todoItem) => todoItem.done);
    return <div className="items">{
        todoItems.map((todoItem) => {
            return (
                <DoneItem
                    todoItem={todoItem}
                    key={todoItem.id}
                />

            )
        })}
    </div>

};

export default DoneGroup;
