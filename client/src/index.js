import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contextprovider from "./components/context/Contextprovider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextprovider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
  </Contextprovider>
  
);


