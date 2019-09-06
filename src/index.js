import "./scss/app.scss";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Pomo from "./components/pomodoro";

class Pomodoro extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Pomo />
            </div> 
        );
    }
}

const App = document.querySelector("#app");
ReactDOM.render(<Pomodoro name={""} />, App);
