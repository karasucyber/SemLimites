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
  margin: 10px;
  width: 80%;
  height: 10%;
  justify-content: flex-end;
  background: rgba(250, 250, 250, 0.10); 
  border-radius: 50px;
  transition: border-bottom 0.3s ease;
  &:hover {
    animation: ${borderAnimation} 1.5s infinite; /* Adiciona a animação no hover */
    border-bottom-color: darkgray;}
  @media (max-width: 768px) {
    width: 400px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    justify-content: center;
  }
`;

const ContainerBar = styled.div`
margin: 10px;
padding: 10px;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  background: rgba(217, 217, 300, 0.2);
  border-radius: 10px;
  transition: background 0.3s; // Adiciona uma transição suave para a mudança de cor ao passar o mouse
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 250 ); // Branco parcialmente transparente ao passar o mouse
  }
  @media (max-width: 768px) {
    width: 500px;
    height: 100%;
    padding: 10px;
    font-size: 15px;

  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;

  &:hover {
color:  #D5E528;    
  }
`;

const ContainerBar1 = styled.div`
  padding: 5px;
  width: 80%;
  height: 70%;
  display: flex;
  border-radius: 10px;

`;


const ContainerIMG = styled.div({
  backgroundImage: `url('Design sem nome (3) (1).png')`,
  backgroundSize: "cover", 
  backgroundPosition: "center", 
  backgroundRepeat: "no-repeat", 
  width: "150px",
  height: "50px",
  '@media (max-width: 758px)': {
    width: "40px",
    height: "40px",
  backgroundImage: `url('Design sem nome (3) (1).png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
 

    },
});

export const NavBar = () => {
  return (
    <Container>
       <ContainerBar1>
        <ContainerIMG></ContainerIMG>
      </ContainerBar1>
      <ContainerBar>
        <StyledLink href="/">Inicio</StyledLink>
      </ContainerBar>
      <ContainerBar>
        <StyledLink href="/Cursos">Curso</StyledLink>
      </ContainerBar>
      <ContainerBar>
        <StyledLink href="/Bolsista">Bolsistas</StyledLink>
      </ContainerBar>  
      <ContainerBar>
        <StyledLink href="/Empresas">Empresas</StyledLink>
      </ContainerBar>
    </Container>
  );
};

export default NavBar;
