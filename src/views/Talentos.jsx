import styled from "styled-components";
import talents from "../statics/talentos.json";
import proyectos from "./../assets/graphics/proyectos.svg";
import MiniProyectos from "./../assets/graphics/mini-proyectos.svg";
import leftArrow from "./../assets/graphics/left-arrow.svg";
import { getWindowDimension } from "../utils/utils";
import gemita from "../../public/talents/gemita.png";
import thegrefg from "../../public/talents/thegrefg.png";
import gonsabella from "../../public/talents/gonsabella.png";
import llunaclark from "../../public/talents/llunaclark.png";
import mixwell from "../../public/talents/mixwell.png";
import rogercarbo from "../../public/talents/rogercarbo.png";
import Minigemita from "../../public/mini-talents/mini-gemita.png";
import Minithegrefg from "../../public/mini-talents/mini-thegrefg.png";
import Minigonsabella from "../../public/mini-talents/mini-rogercarbo.png";
import Minillunaclark from "../../public/mini-talents/mini-llunaclark.png";
import Minimixwell from "../../public/mini-talents/mini-mixwell.png";
import Minirogercarbo from "../../public/mini-talents/mini-rogercarbo.png";

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
    z-index: 10;
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
  .mini-talentos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    z-index: 10;
    img {
      width: 100%;
      min-width: 170px;
      box-shadow: 0px 0px 12.51px 0px #2c665f;
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
  .discontinous-box {
    width: 94%;
    height: 105%;
    border-radius: 34px;
    border: 1px dashed #219c90;
    position: absolute;
    top: -103%;
    z-index: 1;
    @media (max-width: 660px) {
      display: none;
    }
  }
`;

const imageMapper = {
  gemita: gemita,
  gonsabella: gonsabella,
  llunaclark: llunaclark,
  mixwell: mixwell,
  rogercarbo: rogercarbo,
  thegrefg: thegrefg,
};

const imageMiniMapper = {
  gemita: Minigemita,
  gonsabella: Minigonsabella,
  llunaclark: Minillunaclark,
  mixwell: Minimixwell,
  rogercarbo: Minirogercarbo,
  thegrefg: Minithegrefg,
};

const Talentos = () => {
  const { width } = getWindowDimension();
  return (
    <StyledTalentos>
      {width > 660 ? (
        <>
          <div className="talentos">
            {Object.keys(talents).map((talent, index) => {
              return (
                <div key={index}>
                  <img
                    src={imageMapper[talents[talent].image]}
                    alt={talents[talent].name}
                  />
                </div>
              );
            })}
          </div>
          <div className="sub-talento">
            especializados en ubicarte donde quieras estar
          </div>
        </>
      ) : (
        <div className="mini-talentos">
          {Object.keys(talents).map((talent, index) => {
            return (
              <div key={index}>
                <img
                  src={imageMiniMapper[talents[talent].image]}
                  alt={talents[talent].name}
                />
              </div>
            );
          })}
        </div>
      )}
      <StyledProjectPicture>
        <div className="discontinous-box" />
        <img
          src={leftArrow}
          className="leftArrow"
          alt="leftArrow"
          draggable="false"
        />
        {width > 660 ? (
          <img
            src={proyectos}
            className="proyectos"
            alt="proyectos"
            draggable="false"
            id="proyectos"
          />
        ) : (
          <img
            src={MiniProyectos}
            className="proyectos"
            alt="proyectos"
            draggable="false"
            id="proyectos"
          />
        )}
      </StyledProjectPicture>
    </StyledTalentos>
  );
};

export default Talentos;
