import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./global.css";

import { HashRouter, Route, Routes } from 'react-router-dom';
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
    <HashRouter basename='/'>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/create/task' element={<CreateTaskPage />} />
        <Route path='/create/goal' element={<CreateGoalPage />} />

        <Route path='/edit/task' element={<EditTaskPage />} />
        <Route path='/edit/goal' element={<EditGoalPage />} />

        <Route path='/select' element={<SelectListPage />} />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);
