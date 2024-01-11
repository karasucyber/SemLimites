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
  width: 60%;
  height: 4%;
  justify-content: flex-end;
  background: rgba(217, 217, 217, 0.5); 
  border-radius: 50px;
  transition: border-bottom 0.3s ease; /* Adiciona uma transição para a propriedade da borda inferior */

  &:hover {
    animation: ${borderAnimation} 1.5s infinite; /* Adiciona a animação no hover */
    border-bottom-color: darkgray; /* Define a cor no hover se necessário */
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    padding: 10px;
    margin: 50px;
    justify-content: center;
  }
`;

const ContainerBar = styled.div`
  padding: 5px;
  width: 10%;
  height: 70%;
  display: flex;
  justify-content: center;
  font-size: 17px;
  color: white;
  border-radius: 10px;
  transition: background 0.3s; // Adiciona uma transição suave para a mudança de cor ao passar o mouse
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.5); // Branco parcialmente transparente ao passar o mouse
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;

  &:hover {
    
  }
`;

export const NavBar = () => {
  return (
    <Container>
      <ContainerBar>
        <StyledLink href="">Inicio</StyledLink>
      </ContainerBar>
      <ContainerBar>
        <StyledLink href="/Cursos">Curso</StyledLink>
      </ContainerBar>
      <ContainerBar>
        <StyledLink href="/Bolsista">Bolsistas</StyledLink>
      </ContainerBar>  
      <ContainerBar>
        <StyledLink href="/Empresas">Para empresas</StyledLink>
      </ContainerBar>
    </Container>
  );
};

export default NavBar;
