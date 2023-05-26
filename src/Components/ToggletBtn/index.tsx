import React from "react";
import "./ToggleBtn.scss";

const ToggleBtn = (props: any) => {
    return (
        <button className="toggle-button" onClick={props.click} >
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
        </button>
    )
}

export default ToggleBtn;