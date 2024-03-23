import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/todo.slice';
import './TodoItem.css'
import { LuTrash } from "react-icons/lu";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(todo.done);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        dispatch(toggleTodo(todo.id));
        console.log(`Tarea ${todo.id}: ${newCheckedState ? 'done' : 'pending'}`);
    };

    return (
        <div className='list_container'>
            <div className='todo_card'>
                <input
                    type='checkbox'
                    className='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className='todo_list' style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                    {todo.title}
                </div>
                <button onClick={handleDelete} className='delete_button'>
                    <LuTrash />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;