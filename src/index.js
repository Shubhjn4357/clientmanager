import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './app/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Bs} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Bs basename={process.env.PUBLIC_URL}>
   <Provider store={configureStore}>
     <App />
   </Provider>
 </Bs>
  </React.StrictMode>
);
const GetAnalytiv=(e)=>{
  console.log(e)
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(GetAnalytiv());
