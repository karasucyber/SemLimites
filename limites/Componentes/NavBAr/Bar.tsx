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
  width: 50%;
  justify-content: flex-end;
  border-radius: 50px;
  transition: border-bottom 0.3s ease;
  &:hover {
    animation: ${borderAnimation} 1.5s infinite; /* Adiciona a animação no hover */
    border-bottom-color: darkgray;
  }
`;

const ContainerBar = styled.div`
  margin: 10px;
  padding: 10px;
  height: 50px;
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 10);
  z-index: 1000;
  @media (max-width: 768px) {
    width: 160px;
    min-width: unset;
  }
`;

const Controller = styled.div<{ isOpen: boolean }>`
@media (max-width: 768px) {
  height: ${({ isOpen }) => (isOpen ? '300px' : '100px')};
  
}
`;

export const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
   <Controller isOpen={dropdownOpen}>
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
    </Container>
  );
};

export default NavBar;
