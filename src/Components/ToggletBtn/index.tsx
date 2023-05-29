import React from "react";
import "./ToggleBtn.scss";

const ToggleBtn = (props: any) => {
    return (
        <button className="toggle-button" onClick={props.click} >
            <span className={`toggle-button__bar ${props.opened ? "toggle_trans" : null}`}></span>
            <span className={`toggle-button__bar ${props.opened ? "toggle_trans" : null}`}></span>
            <span className={`toggle-button__bar ${props.opened ? "toggle_trans" : null}`}></span>
        </button>
    )
}

export default ToggleBtn;