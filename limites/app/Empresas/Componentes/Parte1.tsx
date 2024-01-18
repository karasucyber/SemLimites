import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div({
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
  },
});

const FormContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%", // Alteração no tamanho do formulário para 80% na versão mobile
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "8px",
  '@media (max-width: 758px)': {
    width: "100%", // Alteração para 100% na versão mobile
  },
});

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const Input = styled.input({
  margin: "8px",
  padding: "8px",
  width: "100%",
});

const TextArea = styled.textarea({
  margin: "8px",
  padding: "8px",
  width: "100%",
});

const Button = styled.button({
  margin: "8px",
  padding: "8px",
  cursor: "pointer",
});

const Parte1 = () => {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica de envio para o email ou servidor.
    // Isso é apenas um exemplo no console para ilustrar.
    console.log(`Nome da Empresa: ${companyName}`);
    console.log(`Número de Telefone: ${phoneNumber}`);
    console.log(`Mensagem: ${message}`);
    
    // Reinicie os estados após o envio, se necessário.
    setCompanyName("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <label>
            Nome da Empresa:
            <Input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label>
            Número de Telefone:
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Mensagem:
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Parte1;
