import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import { AiFillBook } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { Line } from "three";
import  { keyframes } from "styled-components";
import Line2 from "../Line";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "900px",
  width: "1400px",
  backgroundImage: `url('1.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "1200px",
    width: "350px",
    backgroundImage: `url('.png')`,
  },
});

const Titulo = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "60px",
  color: "#D5E528",
  '@media (max-width: 758px)': {
    marginBottom: "5px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "40px",
  },
});

const ContainerG = styled.div({
  display: "flex",
  flexDirection: "row", 
  alignItems: "center",
  height: "100%",
  width: "98%",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const ContainerT = styled.div({
  display: "flex",
  fontSize: "20px",
  height: "100%",
  width: "99%",
  justifyContent: 'center',
  color: "white",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const ContainerV = styled.div({
  display: "flex",
  justifyContent: 'center',
  height: "50%",
  width: "99%",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "600px",
    width: "100%",
  },
});

const ContainerDireita = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  width: "60%",
  '@media (max-width: 758px)': {
    width: "100%",
  },
});

const Amarelo = styled.a({
  color: "#D5E528",
});

const ContainerIcons = styled.span({
  fontSize: "50px",
});



const Paragrafo = styled.p({
  fontSize: "30px",
  '@media (max-width: 758px)': {
    fontSize: "25px",

  },
});





const Parte2 = () => {
  return (
    <Container>
      <ContainerG>
        <ContainerT>
          <ContainerDireita>
            <Titulo> Nosso objetivo</Titulo>
            <Paragrafo>Somos um négocios de <Amarelo>impacto social </Amarelo> que surgiu visando promover
              a luta contra a <Amarelo> desigualdade social </Amarelo> no Brasil, <Amarelo>mudando vidas</Amarelo> através da tecnologia e educação, trazendo diversidades
              enquanto empresas como a sua alcançam todas as métricas <Amarelo>ESG</Amarelo>
            </Paragrafo>
          </ContainerDireita>
        </ContainerT>

        <ContainerV>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3fDlLEbVJWs"
            width="100%"
            height="400px"
            style={{
              boxShadow: "0 8px 16px rgba(213, 229, 40, 0.8)",
            }}/>          
          </ContainerV>
      </ContainerG>
     
    </Container>
  );
};

export default Parte2;