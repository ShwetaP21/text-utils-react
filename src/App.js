import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import {Switch,Route} from 'react-router-dom';

const App = () => {
  return (
   <Switch> 
     <Route exact path='/' component={Home}/> 
     <Route exact path='/about' component={About}/> 
     </Switch>
  );
}
export default App;
