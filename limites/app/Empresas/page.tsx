'use client'
import Footer from "@/Componentes/Footer/Footer";
import NavBar from "@/Componentes/NavBAr/Bar";
import React from "react";
import styled from "styled-components";
import Parte1 from "@/app/Empresas/Componentes/Parte1";
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
    background: "black"

  });

const ContainerV = styled.div({
  display: "flex",
  justifyContent: 'center',
  height: "100%",
  width: "99%",
  padding: "10px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

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
  

export default function PageEmpresas(){
    return(<> 
    <Container>
      <NavBar/>
      <ContainerV>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="80%"
            height="600px"/>          
          </ContainerV>
          <StyledContainer>
        <StyledButton>Google Forms</StyledButton>
      </StyledContainer>
      
       <Footer/>
    </Container>
    </>)
}