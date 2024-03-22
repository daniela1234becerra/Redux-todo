import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/todoItem/TodoItem';
import TodoForm from '../../components/todoForm/TodoForm';
import './TodoList.css'

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className='todo'>
      <h1>TODO</h1>
      <TodoForm />

      <div className='container_list'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
