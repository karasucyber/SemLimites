'use client'
import styled from 'styled-components';
import NabBar from '@/Componentes/NavBAr/Bar';
import Parte1 from '@/Componentes/Parte1/Parte1';
import Parte2 from '@/Componentes/Parte2/Parte2';


const Container = styled.body({
  display: "flex",
  flexDirection: "column",  
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundImage: "url('')",  
  backgroundSize: "cover",  
  backgroundPosition: "center",  
  color: "white",
  padding: "0px",
  margin: "0px",
  border: "none",
  background: "black"
}); 

export default function Home() {
  return (
    <Container>
      <NabBar/>
      <Parte1/>
      <Parte2/>

    </Container>
  )
}
