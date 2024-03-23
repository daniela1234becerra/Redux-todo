import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/todo.slice';
import './TodoItem.css'
import { LuTrash } from "react-icons/lu";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleCheckboxChange = () => {
        dispatch(toggleTodo(todo.id)); 
    };

    return (
        <div className='list_container'>
            <div className='todo_card'>
                <input
                    type='checkbox'
                    className='checkbox'
                    checked={todo.done} 
                    onChange={handleCheckboxChange} 
                />
                <div className='todo_list' style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
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
