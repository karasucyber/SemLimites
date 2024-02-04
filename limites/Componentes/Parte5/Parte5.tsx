import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import { AiFillBook, AiFillEdit, AiFillShopping, AiFillHome } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import Line2 from "../Line";
import { useInView } from 'react-intersection-observer'; // Importe o hook useInView


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 1400px;
  background-image: url('5.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 758px) {
    height: 1700px;
    width: 300px;
    background-image: url('.png');
  }
`;

const Titulo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
  color: #D5E528;
  padding: 10px;

  @media (max-width: 758px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 40px;

  }
`;

const ContainerN = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  padding: 10px;

  @media (max-width: 758px) {
    align-items: center;
    width: 100%;
  }
`;

const Amarelo = styled.a`
  color: #D5E528;
`;

const ContainerIcons = styled.span`
  padding: 10px;
  font-size: 50px;

  @media (max-width: 758px) {
    /* Adjustments for smaller screens */
  }
`;

const Titulo1 = styled.h1`
  font-size: 20px;
  padding: 10px;

  @media (max-width: 758px) {
  }
`;

const Paragrafo = styled.p`
  font-size: 30px;

  @media (max-width: 758px) {
    /* Adjustments for smaller screens */
  }
`;

const ContainerNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 100%;
  color: white;
  flex-direction: column;
  margin: 50px;

  @media (max-width: 758px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const CustomCounter: React.FC<{ initialValue: number; incrementValue: number; maxLimit: number }> = ({ initialValue, incrementValue, maxLimit }) => {
  const [counterNumber, setCounterNumber] = useState(initialValue);

  useEffect(() => {
    const updateCounter = setInterval(() => {
      setCounterNumber((prevCounter) => {
        const newCounter = prevCounter + incrementValue;

        if (newCounter >= maxLimit) {
          clearInterval(updateCounter);
          return maxLimit / 10;
        }

        return newCounter;
      });
    }, 1);

    return () => clearInterval(updateCounter);
  }, [incrementValue, maxLimit, initialValue]);

  return <span>{counterNumber}</span>;
};



const Parte5 = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  return (
    <>
      <Container>
        <ContainerNumber>
          <Titulo>Você sabia que</Titulo>
          <ContainerN>
        <h1>
          <ContainerIcons><AiFillShopping /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={25} maxLimit={130000} /></span><Amarelo>M</Amarelo>De <Amarelo>desempregados</Amarelo> no Brasil
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillBook /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={0.1} maxLimit={10} /></span><Amarelo>%</Amarelo> Dos brasileiros dominam o idioma <Amarelo>inglês</Amarelo>
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillEdit /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={10} maxLimit={100000} /></span><Amarelo>M</Amarelo> De<Amarelo>progamadores</Amarelo> serão necessários no Brasil até 2025
        </h1>
      </ContainerN>

      <ContainerN>
        <h1>
          <ContainerIcons><AiFillHome /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={1} maxLimit={710} /></span><Amarelo>%</Amarelo> Dos desempregados estão em <Amarelo>Comunidade periféricas</Amarelo>
        </h1>
      </ContainerN>

      <ContainerN>
        <h1><ContainerIcons><PiStudentBold /></ContainerIcons>
          <span><CustomCounter initialValue={50} incrementValue={1} maxLimit={720} /></span><Amarelo>%</Amarelo> Dos <Amarelo>jovens</Amarelo> entre 18 a 35 anos não estão no <Amarelo> ensino superior</Amarelo>
        </h1>
      </ContainerN>

        </ContainerNumber>
      </Container>
    </>
  );
};

export default Parte5;
