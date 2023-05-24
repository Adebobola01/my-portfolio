import React from "react";
import devIcon from "../../assets/images/dev-icon.jpg";


const Hero = () => {

    const style = {
        width: "25rem",
        height: "22rem",
        borderRadius: "1rem"
    }
    
    return (
        <img style={style} src={devIcon} alt="itachi_img" />
    )
}

export default Hero