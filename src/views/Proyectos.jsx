import styled from "styled-components";
import greenBg from "./../assets/graphics/green-bg.png";
import proyectos from "../statics/proyectos.json";
import Card from "./components/Card";
import whiteArrowRight from "./../assets/graphics/white-arrow-right.svg";
import whiteArrowLeft from "./../assets/graphics/white-arrow-left.svg";
import hanged from "./../assets/graphics/hanged.svg";
import miniHanged from "./../assets/graphics/mini-hanged.svg";
import cuentanos from "./../assets/graphics/cuentanos.svg";
import dondeUbicamos from "./../assets/graphics/donde-ubicamos.svg";
import separador from "./../assets/graphics/separador.svg";
import miniLogo from "./../assets/graphics/mini-logo.svg";
import esland from "../../public/projects/esland.png";
import minititans from "../../public/projects/minititans.png";
import pingpong from "../../public/projects/pingpong.png";
import { getWindowDimension } from "../utils/utils";

const StyledProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${greenBg});
  .overframe {
    background-color: #219c90;
    width: 100%;
    opacity: 0.7;
  }
  .proyectos {
    display: flex;
    flex-direction: row;
    gap: 5%;
    padding: 5%;
    @media (max-width: 660px) {
      flex-direction: column;
      gap: 7%;
      padding: 10%;
      #card-project-0,
      #card-project-1,
      #card-project-3 {
        margin-bottom: 44px;
      }
    }
    .card-project {
      width: 33%;
    }
    #card-project-0 {
      transition: transform 0.3s ease-in-out;
      transform: rotate(5deg);
    }
    #card-project-1 {
      transition: transform 0.3s ease-in-out;
      transform: rotate(-5deg);
    }
    #card-project-2 {
      transition: transform 0.3s ease-in-out;
      transform: rotate(-5deg);
    }
    #card-project-0:hover,
    #card-project-1:hover,
    #card-project-2:hover {
      transform: rotate(0deg);
    }
  }
  .separador {
    position: absolute;
    top: 85%;
    left: 32%;
    width: 16%;
    height: auto;
  }
  .footer {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10% 0;
    margin: 0 4%;
    .solid {
      border-top: 3px solid #fff;
      width: 100%;
    }
    .footer-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      flex-direction: row;
      margin-top: 20px;
      text-transform: uppercase;
      font-size: 20px;
      @media (max-width: 1005px) {
        font-size: 16px;
      }
      @media (max-width: 790px) {
        font-size: 12px;
      }
      /* @media (max-width: 660px) {
        font-size: 14px;
      } */
      a {
        text-decoration: none !important;
        text-decoration: none;
        color: #fff;
        margin-right: 6px;
      }
      .footer-text-rights {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-transform: none;
        white-space: nowrap;
        overflow: hidden;
        @media (max-width: 660px) {
          white-space: wrap;
        }
        img {
          width: 8%;
          margin-right: 12px;
        }
      }
    }
  }
  #contacto {
    @media (max-width: 660px) {
      height: 86vw;
    }
  }
`;

const StyledProyectosPicture = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 58vw;
  .whiteArrowRight {
    position: absolute;
    top: -6%;
    right: 32%;
    width: 30%;
    height: auto;
  }
  .hanged {
    position: absolute;
    top: 26%;
    right: 4%;
    width: 20%;
    height: auto;
  }
  .hanged-mini {
    display: none;
  }
  .cuentanos {
    position: absolute;
    top: 48%;
    left: 12%;
    width: 55%;
    height: auto;
  }
  .dondeUbicamos {
    position: absolute;
    top: 67%;
    left: 15%;
    width: 52%;
    height: auto;
  }
  .datos-contacto {
    position: absolute;
    top: 92%;
    left: 18%;
    width: 46%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: RobotoCondensedBold;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 1400px) {
      font-size: 26px;
    }
    @media (max-width: 1080px) {
      font-size: 22px;
    }
    @media (max-width: 880px) {
      font-size: 17px;
    }
    @media (max-width: 490px) {
      font-size: 14px;
    }
    @media (max-width: 370px) {
      font-size: 12px;
    }
  }
  .whiteArrowLeft {
    position: absolute;
    top: -12%;
    left: 10%;
    width: 34%;
    height: auto;
  }
  @media (max-width: 660px) {
    .hanged {
      display: none;
    }
    .cuentanos {
      top: 26%;
      left: 16%;
      width: 70%;
    }
    .dondeUbicamos {
      position: absolute;
      top: 42%;
      left: 22%;
      width: 58%;
    }
    .datos-contacto {
      flex-direction: column;
      top: 70%;
      span {
        margin-bottom: 24px;
        text-align: center;
      }
      @media (max-width: 490px) {
        top: 65%;
      }
    }
    .separador {
      top: 60%;
      width: 10%;
      left: 36%;
    }
    .hanged-mini {
      display: flex;
      position: absolute;
      top: 54%;
      right: 20%;
      width: 20%;
      height: auto;
    }
  }
`;

const imageMapper = {
  esland: esland,
  minititans: minititans,
  pingpong: pingpong,
};

const Proyectos = () => {
  const { width } = getWindowDimension();
  return (
    <StyledProyectos>
      <div className="overframe">
        <div className="proyectos">
          {Object.keys(proyectos).map((talent, index) => {
            return (
              <Card
                image={imageMapper[proyectos[talent].image]}
                title={proyectos[talent].title}
                description={proyectos[talent].description}
                date={proyectos[talent].date}
                name={proyectos[talent].name}
                key={index}
                className="card-project"
                id={"card-project-" + index}
              />
            );
          })}
        </div>
        <StyledProyectosPicture id="contacto">
          {width > 660 ? (
            <img
              src={whiteArrowRight}
              className="whiteArrowRight"
              alt="whiteArrowRight"
              draggable="false"
            />
          ) : (
            <img
              src={whiteArrowLeft}
              className="whiteArrowLeft"
              alt="whiteArrowLeft"
              draggable="false"
            />
          )}
          <img src={hanged} className="hanged" alt="hanged" draggable="false" />
          <img
            src={miniHanged}
            className="hanged-mini"
            alt="hanged-mini"
            draggable="false"
          />

          <img
            src={cuentanos}
            className="cuentanos"
            alt="cuentanos"
            draggable="false"
          />
          <img
            src={dondeUbicamos}
            className="dondeUbicamos"
            alt="dondeUbicamos"
            draggable="false"
          />
          <img
            src={separador}
            className="separador"
            alt="separador"
            draggable="false"
          />
          <div className="datos-contacto">
            <span>923 644 644</span>
            <span>info@ubiq.com</span>
            <span>@ubiqagencia</span>
          </div>
        </StyledProyectosPicture>
        <div className="footer">
          <hr className="solid" />
          <div className="footer-text">
            <span>Andorra LA VELLA</span>
            <span className="footer-text-rights">
              {" "}
              <img
                src={miniLogo}
                className="miniLogo"
                alt="miniLogo"
                draggable="false"
              />
              UBIQ S.L. todos los derechos reservados
            </span>
            <span>
              <a href="mailto: abc@example.com">CONTACTO</a>
            </span>
            <span>COOKIES</span>
          </div>
        </div>
      </div>
    </StyledProyectos>
  );
};

export default Proyectos;
