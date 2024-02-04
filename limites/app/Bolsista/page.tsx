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

  const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'center',
    height: "500px",
    width: "1100px",
    padding: "10px",
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "650px",
      width: "100%",
  
    },
  });

  
  const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
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
  
  const GoogleFormsButton = () => {
    return (
      <StyledContainer>
        <StyledButton>Google Forms</StyledButton>
      </StyledContainer>
    );
  };
  
  const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  font-size: 30px;
  margin: 50px;
  box-shadow: 0 8px 16px rgba(213, 229, 40, 0.8);
  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
    font-size: 25px;
  }
`;

  
export default function PageBolsista(){
    return(
     <Container>
        <NavBar/>

<Content>
          <ul>
              <li>ESTRUTURA ESG RÁPIDA, ADAPTÁVEL COM BAIXO CUSTO</li>
              <br></br>
              <li>CURSOS + MÃO NA MASSA COM - TEORIA</li>
              <br></br>
              <li>CURSOS DE CURTA DURAÇÃO (10 MESES)</li>
              <br></br>
              <li>INGLÊS COMO SEGUNDO IDIOMA</li>
              <br></br>
              <li>JOVENS PERIFÉRICOS</li>
              <br></br>
              <li>IMIGRANTES EM VULNERABILIDADE SOCIAL</li>
          </ul>
     </Content>
        <ContainerV>
        <ReactPlayer
  url="https://www.youtube.com/watch?v=5-nZIGFYF_A&feature=youtu.be"
  width="80%"
  height="600px"
  style={{ boxShadow: "0 8px 16px rgba(213, 229, 40, 0.8)" }}
/>

          </ContainerV>
          <StyledContainer>
        <StyledButton><a style={{textDecoration: "none", color: "white"}} href="https://forms.gle/MYDpiSUkYBJLQj5Y6">Google Forms</a> </StyledButton>
      </StyledContainer>
        <Footer/> 
    </Container>)
}