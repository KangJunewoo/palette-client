import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./routes/Index";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Index}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
    </BrowserRouter>
  );
}

export default App;
