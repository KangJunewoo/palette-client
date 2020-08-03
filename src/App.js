import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import merong from "./routes/Index"

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={merong}/>
    </BrowserRouter>
  );
}

export default App;
