import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import Planos from "./carrousel/Carrousel";
import NavBar from "@/Componentes/NavBAr/Bar";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundImage: `url('5.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "100%",
    width: "100%",
    flexDirection: "column",
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
width: 100%; `;


const Amarelo = styled.a`
  color: #D5E528;
  @media (max-width: 768px){

  }
`;


const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
  border-radius: 20px; /* Ajuste o valor conforme necessário */

`;

const Card = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  border-radius: 20px; /* Ajuste o valor conforme necessário */
`;


const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; /* Ajuste o valor conforme necessário */

`;

const FrontFace = styled(CardFace)`
  background-color: #333;
  border-radius: 20px; /* Ajuste o valor conforme necessário */

`;

const BackFace = styled(CardFace)`
  background-color: #555;
  transform: rotateY(180deg);
  border-radius: 20px; /* Ajuste o valor conforme necessário */

`;

const CardImage = styled.img`
  width: 100%;
  height:100%;
  border-radius: 20px; /* Ajuste o valor conforme necessário */

   
`;

const CardDescription = styled.p`
  color: white;
  text-align: center;
  border-radius: 20px; /* Ajuste o valor conforme necessário */

`;

interface CardFlipProps {
  imageSrc: string;
  description: string;
}

const CardFlip: React.FC<CardFlipProps> = ({ imageSrc, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer>
      <Card isFlipped={isFlipped} onClick={handleFlip}>
        <FrontFace>
          <CardImage src={imageSrc} alt="Card Image" />
        </FrontFace>
        <BackFace>
          <CardDescription>{description}</CardDescription>
        </BackFace>
      </Card>
    </CardContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;  // Espaçamento entre os itens
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;  // Empilhar os itens em telas menores que 768px
  }
`;

const Titulo2 = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "40px",
  color: "#D5E528",
  padding: "10px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const Parte1 = () => {
  return (
    <Container>
      <NavBar/>
      <Titulo>Por que nossos cursos!</Titulo>
      <Container1>
        <Container2>
          <Content>
            <ul>
              <li><Amarelo>Missçao inspiradora </Amarelo>, Transformar vidas oferecendo educação de qualidade e desenvolvimento tecnológico a crianças de comunidades carentes.</li>
              <br></br>
              <li><Amarelo> FOCO EM TECNOLOGIA</Amarelo> Programas inovadores ensinam programação e robótica, preparando os alunos para o mundo moderno.</li>
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
      <Titulo2>Front-end </Titulo2>
      <FlexContainer>
        <CardFlip imageSrc="10.png" description="Descrição do card"/>
        <CardFlip imageSrc="11.png" description="Descrição do card"/>
        <CardFlip imageSrc="12.png" description="Descrição do card"/>
      </FlexContainer>
      <Titulo2>Back-end </Titulo2>
      <FlexContainer>
        <CardFlip imageSrc="13.png" description="Descrição do card"/>
        <CardFlip imageSrc="14.png" description="Descrição do card"/>
        <CardFlip imageSrc="15.png" description="Descrição do card"/>
      </FlexContainer>
      <Titulo2>Inglês</Titulo2>
      <FlexContainer>
        <CardFlip imageSrc="16.png" description="Descrição do card"/>
        <CardFlip imageSrc="17.png" description="Descrição do card"/>
        <CardFlip imageSrc="10.png" description="Descrição do card"/>
      </FlexContainer>
    </Container>
  );
};

export default Parte1;