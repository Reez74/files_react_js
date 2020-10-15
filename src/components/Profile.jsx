import React from "react";

export class Profile extends React.Component{
    render() {return <div className="row">
        <div className="col-2">
            <img width="100%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
        </div>
        <div className="col-10">
            <h1>Иван Иванов</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt facilis maxime, porro praesentium qui quibusdam quod, ratione recusandae sapiente soluta vel. Aliquid fugit labore laudantium minima molestias repellat suscipit!</p>
        </div>
    </div>
    }
}