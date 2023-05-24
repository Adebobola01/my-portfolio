import React from "react";


const Logo = () => {
    
    const styles = {
        textDecoration: "none",
        color: "#ff1dce",
        fontSize: "2rem",
        fontWeight: "700",
    }

    return (
        <a style={styles} href="/"><span style={{color: "white"}}>Ade</span>bobola</a>
    )
}

export default Logo;