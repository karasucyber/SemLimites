'use client'
import styled from 'styled-components';
import NabBar from '@/Componentes/NavBAr/Bar';
import Parte1 from '@/Componentes/Parte1/Parte1';
import Parte2 from '@/Componentes/Parte2/Parte2';
import Parte3  from '@/Componentes/Parte3/Parte3';
import Parte4 from '@/Componentes/Parte4/Parte4';
import Footer from '@/Componentes/Footer/Footer';

const Container = styled.body({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "black",
  padding: "0px",
  margin: "0px",
  border: "none",
});



export default function Home() {
  return (
    <Container>
      <Parte1/>
      <Parte2/>
      <Parte3/>
      <Parte4/>
      <Footer/>
    </Container>
  )
}
