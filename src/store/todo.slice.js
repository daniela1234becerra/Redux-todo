// todo.slice.js
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
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteAllTodos: state => {
      state.splice(0, state.length);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, deleteAllTodos } = todoSlice.actions;

export default todoSlice.reducer;