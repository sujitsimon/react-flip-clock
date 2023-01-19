import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import BaseComponent from './component/BaseComponent/BaseComponent';
import reportWebVitals from './reportWebVitals';
import Clock from './component/Clock/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
