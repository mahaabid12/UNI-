import React from "react";
import{BrowserRouter as Router , Route , Switch} from 'react-router-dom';

import './App.css'
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home";
import signup from "./pages/signup";


function App() {
  return (
    <Router>
    <GlobalStyle/>
      <Navbar/>
  
    
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={signup}/>
      </Switch>
  
      
    </Router>
  );
}

export default App;
