import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import NavBar from "../NavBAr/Bar";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
`;
const VideoBackground = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  video {
    object-fit: cover;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  height: 100%; /* Adiciona esta propriedade para ocupar toda a altura do contêiner pai */
`;

const ContainerT = styled.div`
  font-size: 50px;
  padding: 5px;
`;

const ContainerSubT = styled.div`
  font-size: 40px;
  padding: 5px;
`;

const ContainerB = styled.div`
  font-size: 35px;
  padding: 5px;
`;

export const Parte1 = () => {
  return (
    <Container>
        <NavBar/>
<VideoBackground
  url="/Pessoa trabalhando em seu laptop.mp4"
  playing
  loop
  muted
  width="100%"
  height="100%"
  background="white"
/>
      <Content>
        <ContainerT>
          <h1> Venha para sem limites </h1>
        </ContainerT>
        <ContainerSubT>
          <h2> Frase de efeito</h2>
        </ContainerSubT>
        <ContainerB>
          <a> Inscreva-se </a>
        </ContainerB>
      </Content>
    </Container>
  );
};

export default Parte1;
