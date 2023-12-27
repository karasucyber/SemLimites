import React from "react";
import styled from "styled-components";

const Container = styled.div({
    display: "flex",
    padding: "10px",
    margin: "10px",
    top: "0px",
    width: "95%",
    height: "80%",
    justifyContent: "flex-start"
});


const ContainerBar = styled.div({
    padding: "5px",
    margin: "5px",
    background: "#d7e627",
    width: "100px",
    height: "15px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "17px",
    boxShadow: "5px 5px",

});

const StyledLink = styled.a({
    color: "black", 
    textDecoration: "none",
    cursor: "pointer" 
});

export const NavBar = () => {
    return (
        <Container>
            <ContainerBar>
                <StyledLink href="#">Inicio</StyledLink>
            </ContainerBar>
            <ContainerBar>
                <StyledLink href="#">Curso</StyledLink>
            </ContainerBar>
            <ContainerBar>
                <StyledLink href="#">Bolsistas</StyledLink>
            </ContainerBar>
        </Container>
    );
};

export default NavBar;
