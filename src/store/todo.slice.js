import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const updatedState = state.map(todo => {
        if (todo.id === action.payload) {
          const updatedTodo = { ...todo, done: !todo.done };
          console.log(`Tarea ${todo.id}: ${updatedTodo.done ? 'done' : 'pending'}`);
          return updatedTodo;
        }
        return todo;
      });
      return updatedState;
    },
    deleteAllTodos: state => {
      state.splice(0, state.length);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, deleteAllTodos } = todoSlice.actions;
export default todoSlice;
