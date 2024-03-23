// TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../../components/todoItem/TodoItem';
import TodoForm from '../../components/todoForm/TodoForm';
import { deleteAllTodos } from '../../store/todo.slice';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <div className='todo'>
      <h1>TODO</h1>
      <TodoForm />

      <div className='container_list'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      {todos.length > 0 && <button onClick={handleDeleteAllTodos} className='delete_all_button'>Delete All</button>}
    </div>
  );
};

export default TodoList;
