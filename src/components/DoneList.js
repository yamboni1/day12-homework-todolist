import { useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";

const DoneList = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <>
            <h1>Done Items</h1>
            <DoneGroup todoItems={todoItems} />
        </>
    );
};

export default DoneList;
