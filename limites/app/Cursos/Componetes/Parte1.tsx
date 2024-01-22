import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import Planos from "./carrousel/Carrousel";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    '@media (max-width: 758px)': {
      height: "100%",
      width: "100%",
      alignItems: "center"
    },
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",
    color: "#D5E528",
    padding: "10px",
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
  });

  const Container1 = styled.div({
   height: '100%',
   width: "80%",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",    
  })

  const Container2 = styled.div({
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: "10px",
  })

  const Container3 = styled.div({
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    padding: "10px",
  })

  const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'center',
    height: "100%",
    width: "1000px",
    padding: "10px",
    position: "relative",
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
  
    },
  });



  const ContainerV2 = styled.div({
    display: "flex",
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    padding: "10px",
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
  
    },
  });


  
  const ContainerTrianguloDireita = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: flex-end;
    font-size: 15px;
    position: relative;
    color: white;
    overflow: hidden; /* Certifique-se de ocultar partes do triângulo que excedem o contêiner */
  
    &:before {
      content: "";
      width: 0;
      height: 0;
      border-top: 110px solid transparent;
      border-bottom: 60px solid transparent;
      border-left: 300px solid black;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s ease-in-out; /* Adicionando uma transição suave para o efeito hover */
    }
  
    &:hover:before {
      border-left: 300px solid #4CAF50; /* Alterando a cor do triângulo no hover para verde */
    }
  
    > div {
      position: relative;
      z-index: 1;
    }
  `;
  
  const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 70%;
  height: 100%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  font-size: 35px;
  margin: 50px;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 30px;
    margin: 30px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px;
    margin: 20px;
  }
`;  


export const ContainerMain = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

  `;
  const NO = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundImage: `url('sem limites projeto.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    '@media (max-width: 758px)': {
      height: "50%",
      width: "50%",
    },
  });
  const Amarelo = styled.a`
  color: #D5E528;

  @media (max-width: 768px) {
    /* Add empty styles or adjustments specific for smaller screens */
  }
`;
const Parte1 = () => {
  return (
    <Container>
      <Titulo>Por que nossos cursos!</Titulo>
      <Container1>
        <Container2> 
          <Content> 
          <ul>
            <li><Amarelo>Missçao inspiradora </Amarelo>, Transformar vidas oferecendo educação de qualidade e desenvolvimento tecnológico a crianças de comunidades carentes.</li>
            <br></br>
            <li><Amarelo> FOCO EM TECNOLOGIA</Amarelo> Programas inovadores ensinam programação e robótica, preparando os alunos para o mundo moderno.
</li>
            <br></br>
            <li><Amarelo>INCLUSÃO SOCIAL:</Amarelo> Compromisso com a inclusão, proporcionando oportunidades iguais e parcerias para estágios e mentorias.</li>
            <br></br>
            <li><Amarelo>EQUIPE ATIVA: </Amarelo>  Educadores qualificados e apaixonados orientam os alunos em seu crescimento acadêmico e pessoal.</li>
            <br></br>
            <li><Amarelo>RESULTADOS 100% COMPROVADOS:  </Amarelo> Celebramos conquistas acadêmicas, avanços tecnológicos e contribuições à comunidade.</li>
            <br></br>
        </ul>
          </Content>
        </Container2>
     
   
      </Container1>
      <Titulo>Por que nossos cursos!</Titulo>
<NO> 
<Planos/>
</NO></Container>
  );
};

export default Parte1;