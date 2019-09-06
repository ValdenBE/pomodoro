import React from "react";

export default function Buttons(props) {
    return (
        <button
            className={props.className}
            type={"button"}
            onClick={props.handleButton}>
            {props.value}
        </button>
    );
}
