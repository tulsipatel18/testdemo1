import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Memo from './Memo';
// import Inlinecss from './Inlinecss';
import {Header, Inlinecss,Myobj,Obj} from './Inlinecss';
import reportWebVitals from './reportWebVitals';
import Project from './Stylesheet';
import Car  from './Cssmodule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Memo />
    <Header />
    <Inlinecss />
    <Obj />
    <Myobj/>
    <Project/>
    <Car />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
