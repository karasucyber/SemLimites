'use client'
import Footer from "@/Componentes/Footer/Footer";
import NavBar from "@/Componentes/NavBAr/Bar";
import Parte1 from "@/Componentes/Parte1/Parte1";
import React from "react";
import styled from "styled-components";


const Container = styled.body({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: "0px",
    border: "none",
    backgroundImage: `url('19.jpg')`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
  });
  

export default function PageEmpresas(){
    return(<> 
    <Container>
        <NavBar/>
        <Parte1/>        
       <Footer/>
    </Container>
    </>)
}