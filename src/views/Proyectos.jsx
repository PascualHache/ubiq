import styled from "styled-components";
import greenBg from "./../assets/graphics/green-bg.png";

const StyledProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${greenBg});
  background: linear-gradient(180deg, #219c90 52.08%, #219c90 100%);
¡`;

const Proyectos = () => {
  return <StyledProyectos id="proyectos">aaa</StyledProyectos>;
};

export default Proyectos;
