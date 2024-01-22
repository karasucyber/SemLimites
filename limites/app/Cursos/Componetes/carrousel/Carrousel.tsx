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
const ContainerG = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
})



const Container = styled.div({
  height: "90%",
  width: "60%",
  background: "white",
  borderRadius: "30px",
  
  border: "5px solid #d5e528" // Adiciona borda de cor amarelo limão
});

const Container1 = styled.div({
  height: "90%",
  width: "60%",
  background: "black",
  borderRadius: "30px",
  color: "white ",
  
  border: "5px solid white" // Adiciona borda de cor amarelo limão
}) 

const Line = styled.div({
  width:"100%",
  height: "1%",
  background: "black"

})

const Line2 = styled.div({
  width:"100%",
  height: "1%",
  background: "white"

})


const Container2 = styled.div({
  display: "flex",
  justifyItems: "center",
  justifyContent: "center",
  width: "100%",
  })


const Container3 = styled.div({
  width: "100%",
  height: "100%",
  

})

const Container4 = styled.div({

fontSize: "20px",
width: "100%",


})

const Container5 = styled.div({
  
  display: "flex",
  justifyContent: "center",
  fontSize: "30px",
  width: "100%",



})
const Container6 = styled.div({
  
  display: "flex",
  justifyContent: "flex-end"
  
})

const Button = styled.button({
  
  width: "100%",
  borderRadius: "10px",
  background: "black",
  color: "white"


})

const Button2 = styled.button({
  
  width: "100%",
  borderRadius: "10px",
  background: "#d5e528",
  color: "black",


})

export const Planos = () => {
  return (
    <ContainerG>
    
        <S.Titulo>Planos</S.Titulo>
        <div
          style={{
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            
 
          }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 15,
              depth: 60,
              modifier: 15,
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
                <Line2/>         
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
               <Button2> <FaWhatsapp /> </Button2>
              </Container1>
            </SwiperSlide>
            <SwiperSlide >
              <Container>
                <Container2>
                  <h1> Front-end</h1>
                </Container2>
                  <Container3> 
                  <h2> Descrição</h2>
                  <Line></Line>

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
                  <Line/>

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
      
  </ContainerG>
  );
}

export default Planos;
