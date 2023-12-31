import React from "react";
import styled from "styled-components";
import backgroundImage from "@/public/backgroun.jpg"; 

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "800px",
    padding: "20px",
    margin: "20px",
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",   
    padding: "20px",
    margin: "20px",
})

const ContainerIMG = styled.div({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('backgroun.jpg')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "800px",
    height: "400px",
});

export const Parte3 = () => {
    return(<> 
     <Container> 
        <Titulo> Problemas que solucionamos</Titulo>
        <ContainerIMG> 
            <Titulo> Foto artigo </Titulo>
        </ContainerIMG>
        <Titulo>
         <p>ESTRUTURA ESG 
         RÁPIDA, ADAPTÁVEL COM BAIXO CUSTO
         CURSOS + MÃO NA MASSA COM - TEORIA
         CURSOS DE CURTA DURAÇÃO (10 MESES)
         INGLÊS COMO SEGUNDO IDIOMA
         JOVENS PERIFÉRICOS
         IMIGRANTES EM VULNERABILIDADE SOCIAL</p>
     </Titulo>
     </Container>
     </>
     )
}


export default Parte3;