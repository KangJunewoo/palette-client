import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./routes/Index";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact='true' component={Index}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/main' component={Main}/>
    </BrowserRouter>
  );
}

export default App;
