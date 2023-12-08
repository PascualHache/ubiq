import TopBar from "./components/top-bar/TopBar";
import Contactos from "./views/Contacto";
import Main from "./views/Main";
import Proyectos from "./views/Proyectos";
import Talentos from "./views/Talentos";
import "./fonts.css";
import styled from "styled-components";
import greenSand from "./assets/graphics/green-sand.svg";

const StyledApp = styled.div`
  font-family: RobotoCondensed;
  background-image: url(${greenSand});
  background-repeat: repeat;
`;
function App() {
  return (
    <StyledApp>
      <TopBar />
      <Main />
      <Talentos />
      <Proyectos />
      <Contactos />
    </StyledApp>
  );
}

export default App;
