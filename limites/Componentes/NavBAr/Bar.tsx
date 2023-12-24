import React from "react";
import styled from "styled-components";

const Container = styled.div({
    display: "flex",
    justifyContent: "row",
})


const ContainerBar = styled.div({
    padding: "10px",
})


export const NabBar = () => {
    return(
     <Container> 
        <ContainerBar>
        <a>Inicio</a>
        </ContainerBar>
        <ContainerBar>
        <a>Curso</a>
        </ContainerBar>
        <ContainerBar>
        <a>Bolsistas</a>
        </ContainerBar>
    </Container>
    )
}

export default NabBar;
