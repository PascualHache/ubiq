import TopBar from "./components/top-bar/TopBar";
import Contactos from "./views/Contacto";
import Main from "./views/Main";
import Proyectos from "./views/Proyectos";
import Talento from "./views/Talento";
import "./fonts.css";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Main />
      <Talento />
      <Proyectos />
      <Contactos />
    </div>
  );
}

export default App;
