import React from "react";
import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
  0% {
    border-bottom-color: #d7e627; /* Cor inicial */
  }
  50% {
    border-bottom-color: #d7e655; /* Cor intermediária 2 */
  }
  100% {
    border-bottom-color: white; /* Cor final (branco) */
  }
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  top: 0px;
  width: 95%;
  height: 0%;
  justify-content: flex-end;
  transition: border-bottom 0.3s ease; /* Adiciona uma transição para a propriedade da borda inferior */

  &:hover {
    animation: ${borderAnimation} 1.5s infinite; /* Adiciona a animação no hover */
    border-bottom-color: darkgray; /* Define a cor no hover se necessário */
  }
`;



const ContainerBar = styled.div({
    padding: "5px",
    margin: "5px",
    width: "10%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    fontSize: "17px",
    color: "white",

    '&:hover':{
        background: "white",
        borderRadius: "10px",
    }
});

const StyledLink = styled.a({
    color: "white", 
    textDecoration: "none",
    cursor: "pointer",
    '&:hover': {
        color: "black"
    }
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
            <ContainerBar>
                <StyledLink href="#">Para empresas</StyledLink>
            </ContainerBar>
        </Container>
    );
};

export default NavBar;
