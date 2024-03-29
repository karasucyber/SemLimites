import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import NavBar from "../NavBAr/Bar";
import Line2 from "../Line";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundImage: `url('500.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundImage: `url('500.png')`,
    padding: "15px",
  },
})


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
  height: 50%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  margin: 250px;

  @media (max-width: 768px) {  
    width: 90%;
    height: 10%;  
    margin: 10px;  

  }
`;

const ContainerT = styled.div`
  font-size: 35px;
  color: #D5E528;

  @media (max-width: 768px) {
    font-size: 25px;
    color: #D5E528; 
   }
`;

const ContainerSubT = styled.div`
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ContainerB = styled.div`
  font-size: 35px;

  @media (max-width: 768px) {
  }
`;

const ContainerTransp = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 100%;
    
  }
`;


const Button1 = styled.button`
  background: white;
  border-radius: 60px;
  width: 150px;
  height: 50px;
  font-size: 18px;
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
    <>
      <Container>
        <NavBar></NavBar>

        <ContainerTransp>
          <Content>
            <ContainerT>
              <h1> Sem limites </h1>
            </ContainerT>
            <ContainerSubT>
              <h2>
                Sua jornada começa aqui, venha se tornar um desenvolvedor que se destaca no mercado,
                não seja só mais um, seja <Amarelo>SEM LIMITES</Amarelo>
              </h2>
            </ContainerSubT>
            <ContainerB>
              <Button1 > <a style={{ textDecoration: "none", color: "black" }} href="https://api.whatsapp.com/send/?phone=%2B5511949460441&text&type=phone_number&app_absent=0"> Inscreva-se</a></Button1>
              <Button2> <a style={{ textDecoration: "none", color: "white" }} href="https://api.whatsapp.com/send/?phone=%2B5511949460441&text&type=phone_number&app_absent=0">  Contatos</a></Button2>
            </ContainerB>
          </Content>
        </ContainerTransp>
      </Container>
    </>

  );
};

export default Parte1;
