'use client'
import Footer from "@/Componentes/Footer/Footer";
import NavBar from "@/Componentes/NavBAr/Bar";
import React from "react";
import styled from "styled-components";
import Forms from "./Componentes/Forms";
import ReactPlayer from 'react-player';

const Container = styled.body({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: "0px",
    border: "none",
    backgroundImage: `url('2.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
  });



  
  const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    color: white;
  `;
  
  const StyledButton = styled.button`
    background-color: purple;
    color: white;
    padding: 20px 40px;
    font-size: 26px;
    border: none;
    cursor: pointer;
  `;
  

  const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  @media (max-width: 768px) {
    width: 350px;
    height: 100%;
  }
`;

  
export default function PageBolsista(){
    return(
     <Container>
        <NavBar/>
     <Content>
          <ul>
              <li>JOVENS DE 18 Á 35 ANOS</li>
              <br></br>
              <li>INGLÊS COMO SEGUNDO IDIOMA</li>
              <br></br>
              <li>JOVENS PERIFÉRICOS</li>
              <br></br>
              <li>IMIGRANTES EM VULNERABILIDADE SOCIAL</li>
          </ul>
     </Content>
          <StyledContainer>
        <StyledButton><a style={{textDecoration: "none", color: "white"}} href="https://forms.gle/MYDpiSUkYBJLQj5Y6">Google Forms</a> </StyledButton>
      </StyledContainer>
        <Footer/> 
    </Container>)
}