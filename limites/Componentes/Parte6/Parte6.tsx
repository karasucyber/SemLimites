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
    width: "100%",
    color: "white",
    backgroundImage: `url('5.png')`,   
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
        fontSize: "45px"
       
      },

});

const ContainerIMG = styled.div({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('17.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "1700px",
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
    width: 80%;
    font-size: 30px;
    margin: 30px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px;
    margin: 20px;
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