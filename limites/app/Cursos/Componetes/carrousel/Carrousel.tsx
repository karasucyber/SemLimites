import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import * as S from "./style";
import "./styles.css";
import styled from "styled-components";
import { FaCheck  } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Container = styled.div({
  height: "90%",
  width: "60%",
  background: "white",
  borderRadius: "30px",
  padding: "20px",
  border: "5px solid #d5e528" // Adiciona borda de cor amarelo limão
});

const Container1 = styled.div({
  height: "90%",
  width: "60%",
  background: "black",
  borderRadius: "30px",
  color: "white ",
  padding: "20px",
  border: "5px solid white" // Adiciona borda de cor amarelo limão


})


const Container2 = styled.div({
  display: "flex",
  justifyItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "10px"
})


const Container3 = styled.div({
  width: "100%",
  height: "100%",
  padding: "10px"
})

const Container4 = styled.div({
padding: "10px",
fontSize: "20px",
})

const Container5 = styled.div({
  padding: "10px",


})
const Container6 = styled.div({
  padding: "10px"


})

const Button = styled.button({
  padding: "10px"


})

export const Planos = () => {
  return (
    <>
      <S.Container>
        <S.Titulo>Planos</S.Titulo>
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100%",
            height: "100%"
          }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 10,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Navigation]}
            className="swiper">
            <SwiperSlide >
              <Container1>
                <Container2>
                  <h1> Inglês</h1>
                </Container2>
                <h2> Descrição</h2>
         <Container4> 
         <ul> 
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Platorma 24 Horas
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Aulas ao vivo
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/>Professores Estrangeiros
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Aulas Descomplico 
                    </li>
                  </ul>
         </Container4>
                  <h1> Preço: </h1>
                  <Container5>
                  <h1>R$:54,90</h1>
                  </Container5>
                  <Container6> 
                  <p> recorrente</p>
                  </Container6>
               <Button> <FaWhatsapp /> </Button>
              </Container1>
            </SwiperSlide>
            <SwiperSlide >
              <Container>
                <Container2>
                  <h1> Front-end</h1>
                </Container2>
                  <Container3> 
                  <h2> Descrição</h2>
               <Container4>
               <ul> 
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Node,Python, Kotlin & c#
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Projetos
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Plataforma 24 Horas
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Aprendizado facilitado
                    </li>
                  </ul>
               </Container4>
                  <h1> Preço: </h1>
                  <Container5>
                  <h1>R$:70,00</h1>
                  </Container5>
                  <Container6> 
                  <p> recorrente</p>

                  </Container6>

                  <Button> <FaWhatsapp /> </Button>
                </Container3>
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container>
                <Container2>
                  <h1> Back-end</h1>
                </Container2>
                <Container3> 
                  <h2> Descrição</h2>
             <Container4>
             <ul> 
                    <li> 
                    <FaCheck style={{color: 'green'}}/> React, angular, vue
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/>Projetos
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Plataforma 24 Horas
                    </li>
                    <li> 
                    <FaCheck style={{color: 'green'}}/> Aprendizado facilitado
                    </li>
                  </ul>
             </Container4>
                  <h1> Preço: </h1>
               <Container5>
               <h1>R$:70,00</h1>
               </Container5>
                 <Container6>
                 <p> recorrente</p>
                 </Container6>
                  <Button> <FaWhatsapp /> </Button>
                </Container3>
              </Container>
            </SwiperSlide>
          </Swiper>
        </div>
      </S.Container>
    </>
  );
}

export default Planos;