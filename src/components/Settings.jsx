import React from "react";

export class Settings extends React.Component{
    render() {return <div className="row">
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
}