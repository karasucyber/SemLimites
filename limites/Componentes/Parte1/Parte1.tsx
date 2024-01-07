import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import NavBar from "../NavBAr/Bar";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 80%;
  height: 100%;
  padding: 200px; 

`;

const ContainerT = styled.div`
  font-size: 35px;
  padding: 5px;

`;

const ContainerSubT = styled.div`
  font-size: 25px;
  padding: 5px;


`;

const ContainerB = styled.div`
  font-size: 35px;
  padding: 5px
`;

const ContainerTransp = styled.div({
  width: "100%",
  height: "100%"
})

export const Parte1 = () => {
  return (
    <Container>
        <NavBar/>
<VideoBackground
  url="/sem limites projeto (1).mp4"
  playing
  loop
  muted
  width="100%"
  height="100%"
  background=""
/>
  <ContainerTransp>
  <Content>
        <ContainerT>
          <h1> Venha para sem limites </h1>
        </ContainerT>
        <ContainerSubT>
          <h2> Sua jornada começa aqui, venha se tornar um desenvolvedor que se destaca no mercado, não seja só mais um, seja SEM LIMITES</h2>
        </ContainerSubT>
        <ContainerB>
          <a> Inscreva-se </a>
          <a> Inscreva-se </a>
        </ContainerB>
      </Content>
  </ContainerTransp>
    </Container>
  );
};

export default Parte1;
