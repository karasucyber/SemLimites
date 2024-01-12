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
});

const ContainerRight = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "40%",
  height: "55%",
});

const ContainerLeft = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "40%", // Adjusted width to make sure it fits within the Container
  height: "10%",
});

const ContainerLeft2 = styled.div({
display: "flex",
justifyContent: "center",
flexDirection: "column",
alignItems: "center",
width: "40%", 
height: "10%",

    
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
<ContainerLeft2> ola</ContainerLeft2>
      </ContainerLeft>
    </Container>
  );
};

export default Footer;
