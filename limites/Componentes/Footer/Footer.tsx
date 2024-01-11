import React from "react";
import styled from "styled-components";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "90%",
    background: "white",
    backgroundImage: `url('19.jpg')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
})

const Footer = () => {
    return(
    <Container>
        <h1> na</h1>

    </Container>
    )
}

export default Footer;