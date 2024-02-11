import React from "react";
import styled from "styled-components";
import backgroundImage from "@/public/backgroun.jpg"; 
import Line2 from "../Line";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "1000px",
    width: "1400px",
    color: "white",
    backgroundImage: `url('3.png')`,   
     backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    '@media (max-width: 758px)': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "45px",
      backgroundImage: `url('.png')`,   
      height: "800px",
      width: "400px",
    },
})

const Titulo = styled.div({
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",   
    color: "#D5E528",
    margin: "100px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "40px",
      },

});

const ContainerIMG = styled.div({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('17.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "1400px",
    height: "900px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        height: "400px",
      },
});



export const Parte6 = () => {
    return(<> 
     <Container> 
        <Titulo>Nos solucionamos!</Titulo>
        <ContainerIMG> 
        </ContainerIMG>
     </Container>
     </>
     )
}

export default Parte6;