import React from "react";
import styled from "styled-components";
import backgroundImage from "@/public/backgroun.jpg"; 

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: "white",
    backgroundImage: `url('6.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",   
    color: "#D5E528",
    padding: "10px",
    margin: "10px",
});

const ContainerIMG = styled.div({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('3.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "1200px",
    height: "600px",
});

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  font-size: 25px;
`;

export const Parte3 = () => {
    return(<> 
     <Container> 
        <Titulo> Problemas que solucionamos</Titulo>
        <ContainerIMG> 
        </ContainerIMG>
        <Titulo> Soluções </Titulo>
        <Content>
        <ul>
            <li>ESTRUTURA ESG RÁPIDA, ADAPTÁVEL COM BAIXO CUSTO</li>
            <li>CURSOS + MÃO NA MASSA COM - TEORIA</li>
            <li>CURSOS DE CURTA DURAÇÃO (10 MESES)</li>
            <li>INGLÊS COMO SEGUNDO IDIOMA</li>
            <li>JOVENS PERIFÉRICOS</li>
            <li>IMIGRANTES EM VULNERABILIDADE SOCIAL</li>
        </ul>
     </Content>
     </Container>
     </>
     )
}


export default Parte3;