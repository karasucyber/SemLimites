import React from "react";
import styled from "styled-components";



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

const ContainerG = styled.div({
    display: "flex",
    fontSize: "35px",   
    height: "100%",
    width: "50%",
    padding: "20px",
    margin: "20px",
})

const ContainerT = styled.div({
    display: "flex",
    fontSize: "35px",   
    height: "100%",
    width: "50%",
    padding: "20px",
    margin: "20px",
    justifyContent: 'flex-end', 
})

const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'flex-start', 
    height: "100%",
    width: "50%",
    background: "white",
    padding: "20px",
    margin: "20px",
})

const ContainerN = styled.div({

})


export const Parte2 = () => {
    return(
        <Container> 
                <Titulo> Quem somos</Titulo>

            <ContainerG>
                <ContainerT>
                <h1> aaaaaaaa</h1>
                </ContainerT>
                <ContainerV> 
                <h1> aaaaaaaa</h1>
            </ContainerV>
            </ContainerG>
            <Titulo> Números </Titulo>
            <ContainerN> 
            <h1> aaaaaaaa</h1>
            </ContainerN>
        </Container>
    )
}

export default Parte2;