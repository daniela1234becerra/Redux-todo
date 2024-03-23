import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo.slice';
import './TodoForm.css'

const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: Date.now(), title }));
        setTitle('');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='todo_form'>
                <input className='input'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter todo title"
                />
                <button type="submit" className='todo_button'>New</button>
            </form>
        </div>
    );
};

export default TodoForm;
