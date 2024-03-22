import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store'; 
import Layout from './pages/Layout/Layout';
import TodoList from './pages/todoList/TodoList'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TodoList />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
