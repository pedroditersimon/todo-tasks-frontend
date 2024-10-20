import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./global.css";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateGoalPage from './pages/CreateGoalPage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditGoalPage from './pages/EditGoalPage';
import EditTaskPage from './pages/EditTaskPage';
import SelectListPage from './pages/SelectListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/create/task' element={<CreateTaskPage />} />
        <Route path='/create/goal' element={<CreateGoalPage />} />

        <Route path='/edit/task' element={<EditTaskPage />} />
        <Route path='/edit/goal' element={<EditGoalPage />} />

        <Route path='/select' element={<SelectListPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
