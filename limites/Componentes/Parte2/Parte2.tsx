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
  width: "1400px  ",
  backgroundImage: `url('1.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "1000px",
    width: "400px",
    backgroundImage: `url('.png')`,

  },
});

const Titulo = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "60px",
  color: "#D5E528",
  padding: "10px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const ContainerG = styled.div({
  display: "flex",
  flexDirection: "row", 
  alignItems: "center",
  height: "100%",
  width: "98%",
  padding: "10px",
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
  padding: "10px",
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
  padding: "10px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

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
  padding: "10px",
  '@media (max-width: 758px)': {
    width: "100%",
  },

})

const Amarelo = styled.a({
  color: "#D5E528",
  '@media (max-width: 758px)': {

  },
})

const ContainerIcons = styled.span({
  padding: "10px",
  fontSize: "50px",
  '@media (max-width: 758px)': {


  },
})

const Titulo1 = styled.h1({
  fontSize: "20px",
  padding: "10px",
  '@media (max-width: 758px)': {

  },

})

const Paragrafo = styled.p({
  fontSize: "30px",
  '@media (max-width: 758px)': {

  },
})




const Parte2 = () => {
  return (
    <Container>
      <Titulo>Quem somos</Titulo>
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
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="100%"
            height="400px"/>          
          </ContainerV>
      </ContainerG>
     
    </Container>
  );
};

export default Parte2;