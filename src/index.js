import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'assets/styles/base.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from 'Redux/reducers/index';
import { Provider } from 'react-redux';
import { adminMenu } from 'api/adminMenu';

const Layout = lazy(() => import('components/Layout/Layout'))
const Loading = lazy(() => import('components/Loading/Loading'))
const Login = lazy(() => import('pages/Login/Login'))
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/admin" element={<Layout />}>
              {adminMenu.map((item, key) => (adminMenu.length - 1 > key) ? (<Route key={key} path={item.route} element={item.component} />) : '')}
            </Route>
            <Route path="/" element={<Login />} exact />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
