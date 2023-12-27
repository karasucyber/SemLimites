import React from "react";
import styled from "styled-components";
import backgroundImage from "@/public/backgroun.jpg"; 



const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "90%",
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
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Ajuste conforme necessário
    backgroundPosition: "center", // Ajuste conforme necessário
    backgroundRepeat: "no-repeat", // Ajuste conforme necessário
    // Adicione outras propriedades de estilo conforme necessário
});
export const Parte3 = () => {
    return(<> 
     <Container> 
        <Titulo> Problemas que solucionamos</Titulo>

        <ContainerIMG>
        </ContainerIMG>
        
     </Container>
     </>)
}