'use client'
import styled from 'styled-components';
import NabBar from '@/Componentes/NavBAr/Bar';
import Parte1 from '@/Componentes/Parte1/Parte1';
import Parte2 from '@/Componentes/Parte2/Parte2';
import Parte3  from '@/Componentes/Parte3/Parte3';
import Parte4 from '@/Componentes/Parte4/Parte4';
import Footer from '@/Componentes/Footer/Footer';
import Parte5 from '@/Componentes/Parte5/Parte5';
import Parte6 from '@/Componentes/Parte6/Parte6';
import { Line } from '@react-three/drei';
import FooterCarousel from '@/Componentes/Line';

const Container = styled.body({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0px",
  margin: "0px",
  border: "none",
  background: "#3C3C3C",

});



export default function Home() {
  return (
    <Container>
      <Parte1/>
      <Parte2/>
      <Parte5/>
      <Parte6/>
      <Parte3/>
      <Parte4/>
      <Footer/>
    </Container>
  )
}
