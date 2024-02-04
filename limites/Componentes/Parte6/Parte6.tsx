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
    padding: "10px",
    margin: "100px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "30px",
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
        width: "500px",
        height: "400px",
      },
});

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, rgba(235, 235, 235, 0.5), rgba(137, 137, 137, 0.5));
  border-radius: 50px;
  padding: 10px;
  font-size: 40px;
  margin: 50px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;


export const Parte6 = () => {
    return(<> 
     <Container> 
        <Titulo> Problemas que solucionamos !!!</Titulo>
        <ContainerIMG> 
        </ContainerIMG>
     </Container>
     </>
     )
}

export default Parte6;