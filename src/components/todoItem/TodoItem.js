import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/todoActions';
import './TodoItem.css'
import { LuTrash } from "react-icons/lu";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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