import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';



const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "850px",
    width: "100%",
    background: "white"
});

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",   
    color: "black",
    padding: "10px",
    margin: "10px",
});

const ContainerG = styled.div({
    display: "flex",
    fontSize: "35px",   
    height: "100%",
    width: "99%",
    color: "white",
});

const ContainerT = styled.div({
    display: "flex",
    fontSize: "20px",   
    height: "100%",
    width: "99%",
    justifyContent: 'center', 
    color: "black",
});

const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'center', 
    height: "100%",
    width: "99%",
    padding: "10px",
    margin: "10px",
});

const ContainerN = styled.div({
    color: "black"
});


export const Parte2 = () => {
    return(
        <Container> 
                <Titulo> Quem somos</Titulo>
            <ContainerG>
                <ContainerT>
                <h1> Nosso objetivo !</h1>
                </ContainerT>
                <ContainerV>
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

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