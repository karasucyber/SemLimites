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
  height: %10;
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
  background: "rgba(255, 255, 255, 1)", // Branco totalmente opaco inicialmente
  borderRadius: "10px",
  transition: "background 0.3s", // Adiciona uma transição suave para a mudança de cor ao passar o mouse

  '&:hover': {
    background: "rgba(255, 255, 255, 0.5)", // Branco parcialmente transparente ao passar o mouse
  },
});


const StyledLink = styled.a({
    textDecoration: "none",
    cursor: "pointer",
    color: "black",
    
    '&:hover': {
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
