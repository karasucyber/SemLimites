import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';


const Container = styled.div({
 width: "100%",
 height: "100%",
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 padding: "10px"
})

const ContainerV = styled.div({
    display: "flex",
    justifyContent: 'center',
    height: "50%",
    width: "99%",
    padding: "10px",
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
  
    },
  });


const Parte1 = () => {
    return(
    <Container> 
           <ContainerV>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3fDlLEbVJWs"
            width="100%"
            height="400px"/>          
          </ContainerV>

    </Container>)
}