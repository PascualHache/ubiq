import styled from "styled-components";
import talents from "../statics/talentos.json";
import proyectos from "./../assets/graphics/proyectos.svg";
import MiniProyectos from "./../assets/graphics/mini-proyectos.svg";
import leftArrow from "./../assets/graphics/left-arrow.svg";
import { getWindowDimension } from "../utils/utils";
import Minigemita from "../../public/mini-talents/mini-gemita.png";
import Minithegrefg from "../../public/mini-talents/mini-thegrefg.png";
import Minigonsabella from "../../public/mini-talents/mini-gonsabella.png";
import Minillunaclark from "../../public/mini-talents/mini-llunaclark.png";
import Minimixwell from "../../public/mini-talents/mini-mixwell.png";
import Minirogercarbo from "../../public/mini-talents/mini-rogercarbo.png";
import Minipaaulacg from "../../public/mini-talents/mini-paaulacg.png";
import Image from "./components/Image";

const StyledTalentos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0px 2%;
  .talentos {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    z-index: 10;
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
      /* box-shadow: 0px 0px 12.51px 0px #2c665f; */
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
    @media (max-width: 660px) {
      width: 40%;
      top: -30%;
      left: 1%;
      width: 32%;
    }
  }
  .proyectos {
    position: absolute;
    top: 50%;
    width: 38%;
    @media (max-width: 660px) {
      width: 40%;
    }
  }
  .discontinous-box {
    width: 94%;
    height: 94%;
    border-radius: 34px;
    border: 1px dashed #219c90;
    position: absolute;
    top: -86%;
    z-index: 1;
    @media (max-width: 660px) {
      display: none;
    }
  }
`;

const imageMiniMapper = {
  gemita: Minigemita,
  gonsabella: Minigonsabella,
  llunaclark: Minillunaclark,
  mixwell: Minimixwell,
  rogercarbo: Minirogercarbo,
  thegrefg: Minithegrefg,
  paaulacg: Minipaaulacg,
};

const Talentos = () => {
  const { width } = getWindowDimension();
  return (
    <StyledTalentos>
      {width > 660 ? (
        <>
          <div className="talentos">
            {Object.keys(talents).map((talent, index) => {
              return <Image key={index} talent={talents[talent]} />;
            })}
          </div>
        </>
      ) : (
        <div className="mini-talentos">
          {Object.values(talents)
            .sort((a, b) => a.miniIndex - b.miniIndex)
            .map((talent, index) => {
              return (
                <div key={index}>
                  <a href={talent.url} target="_blank" rel="noreferrer">
                    <img
                      src={imageMiniMapper[talent.image]}
                      alt={talent.name}
                    />
                  </a>
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
