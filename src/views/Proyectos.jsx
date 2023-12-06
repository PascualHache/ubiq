import styled from "styled-components";
import esquema1 from "./../assets/graphics/esquema1.svg";

const StyledProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #82c7c0;
`;

const Proyectos = () => {
  return (
    <StyledProyectos id="proyectos">
      tema 1
      <img src={esquema1} alt="esquema 1" />
    </StyledProyectos>
  );
};

export default Proyectos;
