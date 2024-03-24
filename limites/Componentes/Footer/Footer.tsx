import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import FooterCarousel from "../Line";


const Amarelo = styled.a`
  color: #D5E528;
  @media (max-width: 768px) {
  }
`;

const Container = styled.div({
  display: "flex",
  height: "100%",
  width: "100%",
  background: "black",
  color: "white",
  backgroundImage: `url('502.png')`,
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

const Container2 = styled.div({
  display: "flex",
  height: "100%",
  width: "100%",
  background: "black",
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
  padding: "20px",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "10px"
  },
});

const ContainerLeft = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
  height: "100%",
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
  width: "100%",
  height: "100%",
  '@media (max-width: 758px)': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

const StyledButton = styled.div({
  fontSize: "30px",
  color: "white",
  textDecoration: "none",
});

const Titulo = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "50px",
  color: "#D5E528",
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
      <FooterCarousel></FooterCarousel>
      <Container>
        <ContainerRight>
          <h1><Amarelo style={{ textDecoration: "none",  }}
            href=""><FaWhatsapp /></Amarelo> (11)94946-0441</h1>
          <h1><Amarelo style={{ textDecoration: "none", }}
            href=""><CiInstagram /></Amarelo> @semlimitesed.tech </h1>
          <h1><Amarelo style={{ textDecoration: "none",  }}
            href=""><MdOutlineAttachEmail /></Amarelo> contato@investesemlimites.com.br</h1>
        </ContainerRight>
        <ContainerLeft>
          <ContainerLeft2>
            <h2>Alunos</h2>
            <StyledButton>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Bolsista"><h6>Bolsista</h6></a>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Bolsista"><h6>Cadastro</h6></a>
            </StyledButton>
          </ContainerLeft2>
          <ContainerLeft2>
            <h2>Empresas</h2>
            <StyledButton>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Empresas"><h6>Cadastro</h6></a>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Empresas"><h6>Parceiros</h6></a>
            </StyledButton>
          </ContainerLeft2>
          <ContainerLeft2>
           <h2>Cursos</h2>
            <StyledButton>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Cursos"><h6>Front-end</h6></a>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Cursos"><h6>Back-end</h6></a>
              <a style={{ textDecoration: "none", color: "#D5E528" }}
                href="/Cursos"><h6>Inglês</h6></a>
            </StyledButton>
          </ContainerLeft2>
        </ContainerLeft>
      </Container>

    </>
  );
};

export default Footer;
