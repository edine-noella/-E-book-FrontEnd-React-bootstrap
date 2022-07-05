// import logo from './logo.svg';
import './App.css';
// import { Button , Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Signup from './components/Signup';

import {  Routes, Route , BrowserRouter as Router  } from 'react-router-dom'
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      
    <Router>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
   
    </Router>
      {/* </header> */}

      
    </div>
  );
}

export default App;
