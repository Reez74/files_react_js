import React from "react";

export class Users extends React.Component{
    render() {
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
}