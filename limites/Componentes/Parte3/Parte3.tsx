import React from "react";
import styled from "styled-components";
import backgroundImage from "@/public/backgroun.jpg"; 
import Line2 from "../Line";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "1200 px",
    width: "1400px",
    color: "white",
    backgroundImage: `url('1.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    '@media (max-width: 758px)': {
      backgroundImage: `url('.png')`,
      height: "1400px",
      width: "400px",

  
     
    },
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",   
    color: "#D5E528",
    padding: "10px",
    margin: "100px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "45px"
       
      },

});

const ContainerIMG = styled.div({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('img2.jpg')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "1400px",
    height: "700px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "500px",
        height: "400px",
  
      },
});

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  font-size: 40px;
  margin: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;

    font-size: 30px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px;
    margin: 20px;
  }
`;



export const Parte3 = () => {
    return(<> 
     <Container> 

        <Titulo> Soluções </Titulo>
        <Content>
          <ul>
              <li>ESTRUTURA ESG RÁPIDA, ADAPTÁVEL COM BAIXO CUSTO</li>
              <br></br>
              <li>CURSOS + MÃO NA MASSA COM - TEORIA</li>
              <br></br>
              <li>CURSOS DE CURTA DURAÇÃO (10 MESES)</li>
              <br></br>
              <li>INGLÊS COMO SEGUNDO IDIOMA</li>
              <br></br>
              <li>JOVENS PERIFÉRICOS</li>
              <br></br>
              <li>IMIGRANTES EM VULNERABILIDADE SOCIAL</li>
          </ul>
     </Content>
     </Container>

     </>
     )
}


export default Parte3;