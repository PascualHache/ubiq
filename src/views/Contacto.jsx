import styled from "styled-components";

const StyledContacto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #c6c782;
`;

const Contacto = () => {
  return <StyledContacto id="contacto">tema 1</StyledContacto>;
};

export default Contacto;
