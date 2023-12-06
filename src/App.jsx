import TopBar from "./components/top-bar/TopBar";
import Contactos from "./views/Contacto";
import Proyectos from "./views/Proyectos";
import Talento from "./views/Talento";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Proyectos />
      <Talento />
      <Contactos />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
    </div>
  );
}

export default App;
