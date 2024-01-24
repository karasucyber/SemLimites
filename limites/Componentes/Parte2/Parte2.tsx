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
  height: "100%",
  width: "100%",
  backgroundImage: `url('Parte1-1.jpeg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "100%",
    width: "100%",
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

const ContainerN = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "55%",
  height: "100%",
  padding: "10px",
  '@media (max-width: 758px)': {
    alignItems: "center",
    width: "55%",
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


const ContainerNumber  = styled.div({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  height: "1000px",
  width: "100%",
  color: "white",
  flexDirection: "column",
  padding : "100px",
  margin: "50px",


  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const Line2 = styled.div({
  display: "block",
  margin: "auto",
  width: "80%",
  height: "1px",
  background: "white"
});


const CustomCounter: React.FC<{ initialValue: number, incrementValue: number, maxLimit: number }> = ({ initialValue, incrementValue, maxLimit }) => {
  const [counterNumber, setCounterNumber] = useState(initialValue);

  useEffect(() => {
    const updateCounter = setInterval(() => {
      setCounterNumber((prevCounter) => {
        const newCounter = prevCounter + incrementValue;

        if (newCounter >= maxLimit) {
          clearInterval(updateCounter);
          return maxLimit / 10; 
        }

        return newCounter;
      });
    }, 1);

    return () => clearInterval(updateCounter);
  }, [incrementValue, maxLimit, initialValue]);

  return (
    <a>{counterNumber}</a>
  );
};




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
      <ContainerNumber> 
      <Line2></Line2>
      <Titulo>Você sabia que</Titulo>
             <ContainerN>
        <h1>
          <ContainerIcons><AiFillShopping /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={75} maxLimit={9000} /></span><Amarelo>M</Amarelo>De <Amarelo>desempregados</Amarelo> no Brasil
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillBook /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={75} maxLimit={55000} /></span><Amarelo>%</Amarelo> Dos brasileiros dominam o idioma <Amarelo>inglês</Amarelo>
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillEdit /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={75} maxLimit={8000} /></span><Amarelo>M</Amarelo> De<Amarelo>progamadores</Amarelo> serão necessários no Brasil até 2025
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillHome /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={75} maxLimit={8000} /></span><Amarelo>%</Amarelo> Dos desempregados estão em <Amarelo>Comunidade periféricas</Amarelo>
        </h1>
      </ContainerN>

      <ContainerN>
        <h1><ContainerIcons><PiStudentBold /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={75} maxLimit={8000} /></span><Amarelo>%</Amarelo> Dos <Amarelo>jovens</Amarelo> entre 18 a 35 anos não estão no <Amarelo> ensino superior</Amarelo>
        </h1>
      </ContainerN>
      </ContainerNumber>
      <Line2></Line2>
 
      
    </Container>
  );
};

export default Parte2;