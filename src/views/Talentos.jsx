import styled from "styled-components";
import talents from "../statics/talentos.json";
import proyectos from "./../assets/graphics/proyectos.svg";
import leftArrow from "./../assets/graphics/left-arrow.svg";

const StyledTalentos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0px 2%;
  .talentos {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  img {
    width: 100%;
  }
  .sub-talento {
    color: #219c90;
    font-family: RobotoCondensed;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -2.28px;
    text-transform: uppercase;
    @media (max-width: 1570px) {
      font-size: 40px;
    }
    @media (max-width: 1280px) {
      font-size: 30px;
    }
    @media (max-width: 960px) {
      font-size: 20px;
    }
  }
`;

const StyledProjectPicture = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 38vw;
  margin-bottom: -5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .leftArrow {
    position: absolute;
    top: 0%;
    left: 12%;
    width: 20%;
    height: auto;
  }
  .proyectos {
    position: absolute;
    top: 50%;
    width: 38%;
  }
`;

const Talentos = () => {
  return (
    <StyledTalentos id="Talentos">
      <div className="talentos">
        {Object.keys(talents).map((talent, index) => {
          return (
            <div key={index}>
              <img
                src={`../../public/talents/${talents[talent].image}`}
                alt={talents[talent].name}
              />
            </div>
          );
        })}
      </div>
      <div className="sub-talento">
        especializados en ubicarte donde quieras estar
      </div>
      <StyledProjectPicture>
        <img
          src={leftArrow}
          className="leftArrow"
          alt="leftArrow"
          draggable="false"
        />
        <img
          src={proyectos}
          className="proyectos"
          alt="proyectos"
          draggable="false"
        />
      </StyledProjectPicture>
    </StyledTalentos>
  );
};

export default Talentos;
