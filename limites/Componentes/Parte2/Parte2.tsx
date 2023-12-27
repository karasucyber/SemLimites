import React from "react";
import styled from "styled-components";


const Container = styled.div({
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    margin: "20px",
    height: "100%",
    width: "100%",
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",   
})

const ContainerT = styled.div({
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
})

const ContainerV = styled.div({

})

const ContainerN = styled.div({

})


export const Parte2 = () => {
    return(
        <Container> 
            <Titulo>Quem nós somos</Titulo>

            <ContainerT>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ContainerT>

            <ContainerV> 

            </ContainerV>
            <ContainerN> 

            </ContainerN>
        </Container>
    )
}

export default Parte2;