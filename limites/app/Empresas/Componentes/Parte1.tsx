import React from "react";
import styled from "styled-components";

const Container = styled.div({
    width: "30%",
    height: "100%",
    '@media (max-width: 758px)': {
      width: "100%",


    },
})

// Define your variables

const formBg = '#e5f8e6';  // Light green background
const formShadow = '#75a375';  // Darker green shadow
const formPrimaryHighlight = '#3a9b3a';  // Dark green primary highlight
const formSecondaryHighlight = '#b7ffb7';  // Light green secondary highlight
const fontSize = '14pt';
const fontFace = 'Fjalla One';
const fontColor = '#2A293E';  // Keep the original font color


// Styled components
const ContactUs = styled.div`
  background: ${formBg};
  padding: 50px 100px;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 15px 15px 1px ${formShadow}, 15px 15px 1px 2px rgba(0, 0, 0, 1);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: ${fontSize};
  line-height: ${parseInt(fontSize) * 2}px;
  font-family: ${fontFace};
  margin-bottom: ${parseInt(fontSize) * 2}px;
  border: none;
  border-bottom: 5px solid rgba(0, 0, 0, 1);
  background: ${formBg};
  min-width: 250px;
  padding-left: 5px;
  outline: none;
  color: rgba(0, 0, 0, 1);

  &:focus {
    border-bottom: 5px solid ${formShadow};
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  line-height: ${parseInt(fontSize) * 2}px;
  padding: 0 20px;
  background: ${formShadow};
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px ${formPrimaryHighlight}, 3px 3px 1px 2px rgba(0, 0, 0, 1);

  &:hover {
    background: rgba(0, 0, 0, 1);
    color: white;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;

const Selection = styled.div`
  ::selection {
    background: ${formSecondaryHighlight};
  }
`;

const Forms = () => {
return(
<Container>
<ContactUs>
    <Input type="text" placeholder="Your Name" />
    <Input type="email" placeholder="Your Email" />
    <Input type="number" placeholder="Your number" />

    <Button>Submit</Button>
    <Selection />
  </ContactUs>
</Container>
    
)
}

export default Forms;