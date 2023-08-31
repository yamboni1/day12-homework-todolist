
import { Button, Modal } from "antd";
import { useTodos } from "../hooks/useTodos";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const TodoItem = (props) => {
    const { toggleItem, updateItem, deleteItem } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoItem, setTodoItem] = useState("");

    const handleToggleItem = async () => {
        toggleItem(props.todoItem.id, props.todoItem)
    };
    const showModal = () => {
        setIsModalOpen(true)
    };
    const handleCancel = () => {
        setTodoItem("")
        setIsModalOpen(false)
    };
    const addItem = (event) => { 
        setTodoItem(event.target.value)
    }

    const handleSubmit = () => {
        updateItem(props.todoItem.id, todoItem)
        setIsModalOpen(false)
    };
    const handleDeleteItem = async () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            deleteItem(props.todoItem.id)
        } else {
            alert("To do item was not deleted");
        }
    };

    return (
        <>
            <div className="todo-item">
                <span id="todoText"
                    className={
                        props.isDone ? "" : props.todoItem.done ? "done" : ""
                    }
                    onClick={handleToggleItem}
                >
                    {props.todoItem.text}
                </span>
                <Button className="edit-btn" icon={<EditOutlined />} onClick={showModal} ></Button>
                {props.isDone ? (
                    ""
                ) : (
                    <Button className="delete-btn" onClick={handleDeleteItem} icon={<DeleteOutlined />}>
                    </Button>
                )}
                <Modal title="Update To Do Task" centered open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
                    <input className="modal-input" type="text" placeholder={props.todoItem.text}
                        value={todoItem}
                        onChange={addItem}>
                    </input>
                </Modal>
                <Modal title="Delete to do task"></Modal>
            </div>
        </>
    );
};

export default TodoItem;
