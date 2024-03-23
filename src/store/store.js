import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    deleteAllTodos: state => {
      state.splice(0, state.length);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export const { addTodo, deleteTodo, deleteAllTodos } = todosSlice.actions;

export default store;
