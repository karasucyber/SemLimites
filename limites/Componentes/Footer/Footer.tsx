import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";


const Amarelo  = styled.a`
  color: #D5E528;
  @media (max-width: 768px) {
  }
`;

const Container = styled.div({
  display: "flex",
  flexDirection: "row", // Change to "row" for horizontal arrangement
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "99%",
  background: "white",
  backgroundImage: `url('19.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

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


  },});

const ContainerLeft = styled.div({
 display:"flex",
 justifyContent:"space-between",
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
justifyContent: "flex-end",
width: "100%",
height: "1000%",
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

const Footer = () => {
  return (
    <Container>
      <ContainerRight>
        <h1><Amarelo href=""><FaWhatsapp/></Amarelo > (11)94946-0441 / (45) 99970-2965</h1>
        <h1><Amarelo href=""><CiInstagram/></Amarelo > @semlimitesed.tech</h1>
        <h1><Amarelo href=""><MdOutlineAttachEmail/></Amarelo > contato@semlimitesed.tech</h1>
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
    </Container>
  );
};

export default Footer;
