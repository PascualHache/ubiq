import TopBar from "./components/top-bar/TopBar";
import { HelmetProvider } from "react-helmet-async";
import Main from "./views/Main";
import Proyectos from "./views/Proyectos";
import Talentos from "./views/Talentos";
import styled from "styled-components";
import greenSand from "./assets/graphics/green-sand.svg";
import "./fonts.css";
import SEO from "./views/components/SEO";

const StyledApp = styled.div`
  font-family: RobotoCondensed;
  background-image: url(${greenSand});
  background-repeat: repeat;
`;
function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <SEO
        title="UBIQ"
        description="Somos una agencia de publicidad, creación de contenido y representación de talento. Representamos a TheGrefg, Gemita, Gonsabella, Llunaclark, Mixwell, Rogercarbo, Paaulacg. Organizamos eventos como MiniTitans, Esland o Ping Pong Challenge."
        name="UBIQ"
        type="landing"
      />
      <StyledApp>
        <TopBar />
        <Main />
        <Talentos />
        <Proyectos />
      </StyledApp>
    </HelmetProvider>
  );
}

export default App;
