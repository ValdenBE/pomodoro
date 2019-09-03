import './scss/app.scss'
import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Pomo from './components/Pomo'

class Pomodoro extends React.Component {
    render() {
        return <div>
            <Header/>
            <Pomo/>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Pomodoro name="" />, App);
