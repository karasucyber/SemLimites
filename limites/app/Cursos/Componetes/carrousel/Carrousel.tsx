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
import { FaCheck, FaWhatsapp } from "react-icons/fa";

const ContainerG = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundImage: `url('Design sem nome (3).png (2).png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  '@media (max-width: 758px)': {
      height: "100%",
      width: "100%",
      flexDirection: "column",
      backgroundImage: `url('.png')`,
  
    },
  },
)

const Container = styled.div({
  height: "100%",
  width: "300px",
  background: "white",
  borderRadius: "30px",
  border: "5px solid #d5e528" // Adiciona borda de cor amarelo limão
});

const Container1 = styled.div({
  height: "100%",
  background: "black",
  borderRadius: "30px",
  color: "white ",
  border: "5px solid white" // Adiciona borda de cor amarelo limão
})

const Line = styled.div({
  display: "block",
  margin: "auto",
  width: "80%",
  height: "1px",
  background: "black"
});

const Line2 = styled.div({
  display: "block",
  margin: "auto",
  width: "80%",
  height: "1px",
  background: "white"
});

const Container2 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
});

const Container3 = styled.div({
  width: "100%",
  height: "100%",
});

const Container4 = styled.div({
  fontSize: "20px",
  width: "100%",
});

const Container5 = styled.div({
  textAlign: "center",
  fontSize: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Container6 = styled.div({
  justifyContent: "start-end", 
  width: "100%",
  paddingLeft: "20px", 
  boxSizing: "border-box"
});

const Container7 = styled.a({
  display: "flex",
  justifyContent: "center"
});

const Container8 = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  width: "40%",
});

const Button = styled.button`
  width: 80%;
  height: 20%;
  padding: 2px;
  border-radius: 10px;
  background: black;
  color: white;
`;

const Button2 = styled.button`
  width: 80%;
  border-radius: 10px;
  background: #d5e528;
  color: black;
`;

export const Planos = () => {
  return (
    <ContainerG>
      <S.Titulo>Planos</S.Titulo>
      <div
        style={{
        
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
            depth: 10,
            modifier: 15,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Navigation]}
          className="swiper"
          style={{ maxWidth: '600px', margin: '0 auto' }} // Adicionei um estilo para limitar a largura do Swiper
        >
          <SwiperSlide>
            <Container1>
              <Container2>
                <h1> Inglês</h1>
              </Container2>
              <Container8>
                <h2> Descrição</h2>
              </Container8>
              <Line2 />
              <Container4>
                <ul>
                  <li>
                    <FaCheck style={{ color: 'green' }} /> Platorma 24 Horas
                  </li>
                  <li>
                    <FaCheck style={{ color: 'green' }} /> Aulas ao vivo
                  </li>
                  <li>
                    <FaCheck style={{ color: 'green' }} />Professores Estrangeiros
                  </li>
                  <li>
                    <FaCheck style={{ color: 'green' }} /> Aulas Descomplico
                  </li>
                </ul>
              </Container4>
              <Container8>
                <h1> Preço: </h1>
              </Container8>
              <Container5>
                <h1>R$:54,90</h1>
              </Container5>
              <Container6>
                <p> Mensalmente</p>
              </Container6>
              <Container7 href="https://wa.me/+551194946-0441">
                <Button2><FaWhatsapp styled={{withd: "10px", height: "10px",}}/></Button2>
              </Container7>
            </Container1>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Container2>
                <h1> Front-end</h1>
              </Container2>
              <Container3>
                <Container8>
                  <h2> Descrição</h2>
                </Container8>
                <Line />
                <Container4>
                  <ul>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Node,Python, Kotlin & c#
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Projetos
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Plataforma 24 Horas
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Aprendizado facilitado
                    </li>
                  </ul>
                </Container4>
                <Container8>
                  <h1> Preço: </h1>
                </Container8>
                <Container5>
                  <h1>R$:70,00</h1>
                </Container5>
                <Container6>
                  <p> Mensalmente</p>
                </Container6>
                <Container7 href="https://wa.me/+551194946-0441">
                  <Button><FaWhatsapp/></Button>
                </Container7>
              </Container3>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Container2>
                <h1> Back-end</h1>
              </Container2>
              <Container3>
                <Container8>
                  <h2> Descrição</h2>
                </Container8>
                <Line />
                <Container4>
                  <ul>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> React, angular, vue
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} />Projetos
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Plataforma 24 Horas
                    </li>
                    <li>
                      <FaCheck style={{ color: 'green' }} /> Aprendizado facilitado
                    </li>
                  </ul>
                </Container4>
                <Container8>
                  <h1> Preço: </h1>
                </Container8>
                <Container5>
                  <Container8>
                    <h1>R$:70,00</h1>
                  </Container8>
                </Container5>
                <Container6>
                  <p> Mensalmente</p>
                </Container6>
                <Container7 href="https://wa.me/+551194946-0441">
                  <Button><FaWhatsapp/></Button>
                </Container7>
              </Container3>
            </Container>
          </SwiperSlide>
        </Swiper>
      </div>
    </ContainerG>
  );
}

export default Planos;
