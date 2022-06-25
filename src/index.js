import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store'
import { Provider } from 'react-redux'
import { postsApiSlice } from './features/posts/postApiSlice';
import { useDispatch } from "react-redux";
// import { setPosts } from "./features/posts/postSlice"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

store.dispatch(postsApiSlice.endpoints.getPosts.initiate);
// const { status, data, error, refetch } = store.dispatch(postsApiSlice.endpoints.getPosts.initiate);
// // const dispatch = useDispatch();

// console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[");
// console.log([data]);
// const dispatch = useDispatch();

// const data = dis

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
