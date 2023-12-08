import styled from "styled-components";
import greenBg from "./../assets/graphics/green-bg.png";
import proyectos from "../statics/proyectos.json";
import Card from "./components/Card";

const StyledProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vw;
  background-image: url(${greenBg});
  .overframe{
    background-color: #219C90;
    width: 100%;
    height: 100vw;
    opacity: 0.7;
  }
  .proyectos{
    display: flex;
    flex-direction: row;
    gap: 3%;
    padding: 5%;
    .card-project{
      width: 33%;
    }
  }
¡`;

const Proyectos = () => {
  return (
    <StyledProyectos id="proyectos">
      <div className="overframe">
        <div className="proyectos">
          {Object.keys(proyectos).map((talent, index) => {
            return (
              <Card
                image={`../../public/projects/${proyectos[talent].image}`}
                title={proyectos[talent].title}
                description={proyectos[talent].description}
                date={proyectos[talent].date}
                name={proyectos[talent].name}
                key={index}
                className="card-project"
              />
            );
          })}
        </div>
      </div>
    </StyledProyectos>
  );
};

export default Proyectos;
