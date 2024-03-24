'use client'
import Footer from "@/Componentes/Footer/Footer";
import NavBar from "@/Componentes/NavBAr/Bar";
import React from "react";
import styled from "styled-components";
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
  
  
export default function PageBolsista(){
    return(
     <Container>
        <NavBar/>
        <ContainerV>
        <ReactPlayer
  url="https://www.youtube.com/watch?v=dCF9wvpQ5wQ&feature=youtu.be"
  width="80%"
  height="100%"
  style={{
    boxShadow: "0 8px 16px rgba(213, 229, 40, 0.8)",
  }}/>
    
          </ContainerV>
          <StyledContainer>
        <StyledButton><a  style={{textDecoration: "none", color: "white"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeHpPZj0eSx87yYFxMfnGKJxJlkPFPKlFrL-I4dHTDkpzZksA/viewform">Google Forms</a></StyledButton>
      </StyledContainer>
        <Footer/> 
    </Container>)
}