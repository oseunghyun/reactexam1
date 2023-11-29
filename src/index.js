import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// app을 import해서 html
// 태그처럼 써서 app이라는 함수가 반환하는 값을 id가 root인 요소에 밑에 렌더하겠다.
// root라는 id를 갖는 div는 Public > index.html에 있음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
