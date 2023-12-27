import React from "react";
import styled from "styled-components";


const Container = styled.div({
    display: "flex",
    justifyContent: "center",
    background: "gray",
    width: "95%",
    height: "400px",
    padding: "10px",
    top: "0px",
})

const ContainerText = styled.div({
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    flexDirection: "column",
    color: "black",
})

const ContainerT = styled.div({
    fontSize: "25px",
    padding: "5px"
})

const ContainerSubT = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    padding: "5px"
})

const ContainerB = styled.div({ 
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    padding: "5px",
})


export const Parte1 = () => {
    return(
        <Container>
            <ContainerText> 
                <ContainerT>
                <h1> Venha para sem limites </h1>
                </ContainerT>
                <ContainerSubT>
                <h2> Frase de efeito</h2>
                </ContainerSubT>
                <ContainerB> 
                <a> Inscreva-se </a>
                </ContainerB>        
            </ContainerText>
        </Container> 
    )
}

export default Parte1;