import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';



const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "105vh",
    width: "100%",
    background: "white"
});

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",   
    color: "black",
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
    color: "black",
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
    color: "black"
});


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
            <h1>Nosso objetivo !</h1>
          </ContainerT>
          <ContainerV>
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </ContainerV>
        </ContainerG>
        <Titulo>Você sabia que</Titulo>
        
        <ContainerN> 
        <h1>
            <span >{counterNumber}</span>M De desempregados no
            Brasil
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1>
            <span >{counterNumber}</span>% Dos brasileiros dominam o idioma inglês
          </h1>
        </ContainerN>
        <ContainerN>
          <h1>
            <span >{counterNumber}</span>M De progamadores serão necessários no Brasil até 2025
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1>
            <span >{counterNumber}</span>% Dos desempregados estão em Comunidade periféricas
          </h1>
        </ContainerN>
        <ContainerN> 
        <h1>
            <span >{counterNumber}</span>% Dos jovens entre 18 a 35 anos não estão no ensino superior
          </h1>
        </ContainerN>
      </Container>
    );
  };
  
  export default Parte2;