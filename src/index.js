import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'assets/styles/base.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Home from 'pages/Admin/Home/Home';
import Users from 'pages/Admin/Users/Users';
import { createStore } from 'redux';
import allReducers from 'Redux/reducers/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/users" element={<Users />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
