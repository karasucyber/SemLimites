import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";


const Amarelo = styled.a`
  color: #D5E528;
  @media (max-width: 768px) {
  }
`;

const Container = styled.div({
  display: "flex",
  height: "100%",
  width: "99%",
  background: "black",
  color: "white",
  backgroundImage: `url('19.png')`,
  backgroundSize: "cover", 
  backgroundPosition: "center", 
  backgroundRepeat: "no-repeat", 
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url('.png')`,

  },
});


const ContainerRight = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px"
  },
});

const ContainerLeft = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
  height: "100%",
  padding: "10px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

const ContainerLeft2 = styled.div({
  display: "flex",
  justifyItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "90%",
  height: "100%",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
})



const StyledButton = styled.div({
  fontSize: "30px",
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
    backgroundImage: `url('18.png')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    width: "1400px",
    height: "700px",
    '@media (max-width: 758px)': {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        height: "400px",
        backgroundImage: `url('20.png')`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
  
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




const Footer = () => {
  return (
<>
<ContainerIMG> 
        </ContainerIMG>
<Container> 
     
      <ContainerRight>
        <h1><Amarelo href=""><FaWhatsapp /></Amarelo> (11)94946-0441 / (45) 99970-2965</h1>
        <h1><Amarelo href=""><CiInstagram /></Amarelo> @semlimitesed.tech </h1>
        <h1><Amarelo href=""><MdOutlineAttachEmail /></Amarelo> contato@semlimitesed.tech </h1>
      </ContainerRight>
      <ContainerLeft>
        <ContainerLeft2>
          <Amarelo><h2>Alunos</h2></Amarelo>
          <StyledButton>
            <h6>Bolsista</h6>
            <h6>Cadastro </h6>
          </StyledButton>
        </ContainerLeft2>
        <ContainerLeft2>
          <Amarelo><h2>Empresas</h2></Amarelo>
          <StyledButton>
            <StyledButton>
              <h6>Cadastro </h6>
              <h6>Parceiros</h6>
            </StyledButton>
          </StyledButton>
        </ContainerLeft2>
        <ContainerLeft2>
          <Amarelo><h2>Cursos</h2></Amarelo>
          <StyledButton>
            <h6>Front-end</h6>
            <h6>Back-end</h6>
            <h6>inglês</h6>
          </StyledButton>
        </ContainerLeft2>
      </ContainerLeft>
    </Container></>
  );
};

export default Footer;
