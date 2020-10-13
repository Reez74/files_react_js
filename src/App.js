import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = () => {
  return <ul>
    <li><NavLink to="/profile">Профиль</NavLink></li>
    <li><NavLink to="/settings">Настройки</NavLink></li>
    <li><NavLink to="/users">Пользователи</NavLink></li>
  </ul>
}

const Profile = () => {
  return <div className="row">
    <div className="col-2"></div>

  </div>
}


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <div className="col-3">
            <Menu/>
          </div>
          <div className="col-9">
            <Route path="/profile" render={()=>{return <Profile/>}}/>
            <Route path="/settings" render={()=>{return <h1>Настройки</h1>}}/>
            <Route path="/users" render={()=>{return <h1>Пользователи</h1>}}/>
          </div>
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
