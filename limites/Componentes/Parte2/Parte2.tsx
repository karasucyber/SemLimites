import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import { AiFillBook } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";


const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "120vh",
    width: "100%",
    background: "black"
});

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",   
    color: "#D5E528",
    padding: "10px",
    margin: "10px",
});

const ContainerG = styled.div({
    display: "flex",
    fontSize: "35px",   
    height: "100%",
    width: "99%",
    color: "white",
});

const ContainerT = styled.div({
    display: "flex",
    fontSize: "20px",   
    height: "100%",
    width: "99%",
    justifyContent: 'center', 
    color: "white",
});

const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'center', 
    height: "100%",
    width: "99%",
    padding: "10px",
    margin: "10px",
});

const ContainerN = styled.div({
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "55%",
  });

const ContainerDireita = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "55%",
  
})

const Amarelo = styled.a({
  color: "#D5E528"
})

const ContainerIcons = styled.span({
  padding:"10px",
  fontSize: "50px"
})

const Titulo1 = styled.h1({
 fontSize: "20px"
 
})

const Paragrafo = styled.p({
  fontSize: "25px"
})



const Parte2: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  useEffect(() => {
    const updateCounter = setInterval(() => {
      setCounterNumber((prevCounter) => {
        const newCounter = prevCounter + 99;

        if (newCounter >= 13000) {
          clearInterval(updateCounter);
          return 1300; 
        }

        return newCounter;
      });
    }, 1);

    return () => clearInterval(updateCounter);
  }, [])



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
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </ContainerV>
        </ContainerG>
        <Titulo>Você sabia que</Titulo>
      
        
        <ContainerN> 
        <h1>
            <ContainerIcons><AiFillShopping /></ContainerIcons>
            <span >{counterNumber}</span><Amarelo>M</Amarelo>De <Amarelo>desempregados</Amarelo> no
            Brasil
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1>
          <ContainerIcons><AiFillBook /></ContainerIcons>
            <span>{counterNumber}</span><Amarelo>%</Amarelo> Dos brasileiros dominam o idioma <Amarelo>inglês</Amarelo>
          </h1>
        </ContainerN>
        <ContainerN>
          <h1>
            <ContainerIcons><AiFillEdit /></ContainerIcons>
            <span >{counterNumber}</span><Amarelo>M</Amarelo> De<Amarelo>progamadores</Amarelo> serão necessários no Brasil até 2025
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1>
        <ContainerIcons><AiFillHome /></ContainerIcons>
            <span >{counterNumber}</span><Amarelo>%</Amarelo> Dos desempregados estão em <Amarelo>Comunidade periféricas</Amarelo>
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1><ContainerIcons><PiStudentBold /></ContainerIcons>
            <span >{counterNumber}</span><Amarelo>%</Amarelo> Dos <Amarelo>jovens</Amarelo> entre 18 a 35 anos não estão no <Amarelo> ensino superior</Amarelo>
          </h1>
        </ContainerN>
      </Container>
    );
  };
  
  export default Parte2;