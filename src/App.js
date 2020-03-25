import React from 'react';

import { Header } from './components';
import './App.scss'; 
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header/>

    </div>
  </Router>
  )
}
export default App;

