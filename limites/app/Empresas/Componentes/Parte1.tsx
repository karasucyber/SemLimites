import React from "react";
import styled from "styled-components";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundImage: `url('Parte1-1.jpeg')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    '@media (max-width: 758px)': {
      height: "100%",
      width: "100%",
    },
});


const Parte1 = () => {
    return(
  <Container>
     
  </Container>    
    )
}


export default Parte1;