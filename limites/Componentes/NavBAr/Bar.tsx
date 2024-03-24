import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from "@react-hook/media-query";
import { GiHamburgerMenu } from "react-icons/gi";



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
    background: none;

  }
`;

const ContainerBar = styled.div`
margin: 10px;
padding: 10px;
  width: 20%;
  height: 50%;
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
     background: none;
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 50px;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: ${({ isOpen }) => (isOpen ? 'row' : 'column')};
  position: block-inline;
  top: 100%;
  right: 0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Controller = styled.div({
  width: "100%",
  height: "100%",
})

export const NavBar = () => {

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      {isMobile ? (
         <Controller>
                <DropdownContainer>
          <ContainerBar onClick={toggleDropdown}>
          <GiHamburgerMenu size={30} />
          </ContainerBar>
          <DropdownContent isOpen={dropdownOpen}>
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
          </DropdownContent>
        </DropdownContainer>
         </Controller>
      ) : (
        <>
          <ContainerBar1>
            <ContainerIMG />
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
        </>
      )}
    </Container>
  );
};

export default NavBar;

