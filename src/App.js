import React from 'react';

import { Header } from './components';
import './App.scss'; 
//import './style/components/_Header.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import {
   HomePage, AboutMePage,
} from "./pages";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/home">
          <HomePage/>
        </Route>
        <Route path="/about">
          <AboutMePage />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}
export default App;