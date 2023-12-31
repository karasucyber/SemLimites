import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import NavBar from "../NavBAr/Bar";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
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

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
  z-index: 1;
  width: 50%;
  height: 60%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  margin: 150px;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const ContainerT = styled.div`
  font-size: 35px;
  padding: 5px;
  color: #D5E528;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const ContainerSubT = styled.div`
  font-size: 25px;
  padding: 5px;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const ContainerB = styled.div`
  font-size: 35px;
  padding: 5px;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const ContainerTransp = styled.div`
  width: 100%;
  height: 100%;
`;

const Button1 = styled.button`
  background: white;
  border-radius: 60px;
  width: 150px;
  height: 50px;
  font-size: 18px;
  margin: 10px;
  border-color: white;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const Button2 = styled.button`
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  color: white;
  border-radius: 50px;
  width: 150px;
  height: 50px;
  font-size: 18px;
  border-color: #D5E528;
  margin: 10px;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

const Amarelo = styled.a`
  color: #D5E528;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;

export const Parte1 = () => {
  return (
    <Container>
      <NavBar />
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
            <h2>
              Sua jornada começa aqui, venha se tornar um desenvolvedor que se destaca no mercado,
              não seja só mais um, seja <Amarelo>SEM LIMITES</Amarelo>
            </h2>
          </ContainerSubT>
          <ContainerB>
            <Button1> Inscreva-se</Button1>
            <Button2> Contatos </Button2>
          </ContainerB>
        </Content>
      </ContainerTransp>
    </Container>
  );
};

export default Parte1;
