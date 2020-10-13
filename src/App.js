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
    <div className="col-2">
      <img width="100%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
    </div>
    <div className="col-10">
      <h1>Иван Иванов</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt facilis maxime, porro praesentium qui quibusdam quod, ratione recusandae sapiente soluta vel. Aliquid fugit labore laudantium minima molestias repellat suscipit!</p>
    </div>
  </div>
}

const Settings = () => {
  return <div className="row">
    <div className="col-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Имя: Иван [изменить]</li>
        <li className="list-group-item">Фамилия: Иванов [изменить]</li>
        <li className="list-group-item">Email: ivanov@mail.ru</li>
        <li className="list-group-item">ID: 1</li>
      </ul>

    </div>
  </div>
}

const Users = () => {
  return <div className="row">
    <div className="col-10">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Иван</td>
          <td>Иванов</td>
          <td>ivanov@mail.ru</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Василий</td>
          <td>Петров</td>
          <td>petrov@mail.ru</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Илья</td>
          <td>Сидоров</td>
          <td>sidorov@mail.ru</td>
        </tr>
        </tbody>
      </table>
    </div>
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
            <Route path="/settings" render={()=>{return <Settings/>}}/>
            <Route path="/users" render={()=>{return <Users/>}}/>
          </div>
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
