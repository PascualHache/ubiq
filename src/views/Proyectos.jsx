import styled from "styled-components";
import greenBg from "./../assets/graphics/green-bg.png";
import proyectos from "../statics/proyectos.json";
import Card from "./components/Card";
import whiteArrowRight from "./../assets/graphics/white-arrow-right.svg";
import hanged from "./../assets/graphics/hanged.svg";
import miniHanged from "./../assets/graphics/mini-hanged.svg";
import cuentanos from "./../assets/graphics/cuentanos.svg";
import dondeUbicamos from "./../assets/graphics/donde-ubicamos.svg";
import separador from "./../assets/graphics/separador.svg";
import miniLogo from "./../assets/graphics/mini-logo.svg";
import esland from "../../public/projects/esland.png";
import minititans from "../../public/projects/minititans.png";
import pingpong from "../../public/projects/pingpong.png";

const StyledProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${greenBg});
  .over-proyectos {
    width: 100%;
    @media (max-width: 660px) {
      width: 100%;
    }
  }
  .proyectos {
    display: flex;
    flex-direction: row;
    gap: 5%;
    padding: 5%;
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
    @media (max-width: 660px) {
      flex-direction: column;
      gap: 7%;
      padding: 10%;
      #card-project-0,
      #card-project-1,
      #card-project-2 {
        margin-bottom: 44px;
        transform: rotate(0deg);
        padding: 0%;
      }
    }
  }
  .separador {
    position: absolute;
    top: 74%;
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
      color: #fff;
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
  @media (max-width: 660px) {
    height: 120vw;
  }
  .whiteArrowRight {
    position: absolute;
    top: -6%;
    right: 32%;
    width: 30%;
    height: auto;
    @media (max-width: 660px) {
      width: 55%;
      top: -26%;
      right: 0%;
    }
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
    top: 82%;
    left: 14%;
    width: 30%;
    height: auto;
  }
  .datos-contacto {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 83%;
    left: 32%;
    width: 46%;
    height: auto;
    flex-direction: row;
    font-family: RobotoCondensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    span {
      border-radius: 80px;
      border: 2px solid #fff;
      padding: 12px 40px;
      @media (max-width: 1110px) {
        padding: 12px 30px;
      }
      @media (max-width: 860px) {
        padding: 12px 20px;
      }
      @media (max-width: 740px) {
        padding: 12px 12px;
      }
    }
    a {
      text-decoration: none !important;
      text-decoration: none;
      color: #fff;
      margin-right: 6px;
    }
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
  @media (max-width: 660px) {
    .hanged {
      display: none;
    }
    .cuentanos {
      top: 26%;
      left: 10%;
      width: 80%;
    }
    .dondeUbicamos {
      position: absolute;
      top: 40%;
      left: 14%;
      width: 76%;
    }
    .datos-contacto {
      flex-direction: column;
      top: 70%;
      left: 17.5%;
      span {
        margin-bottom: 24px;
        text-align: center;
        padding: 12px 30px;
        @media (max-width: 400px) {
          padding: 12px 20px;
        }
      }
      @media (max-width: 490px) {
        top: 65%;
      }
      @media (max-width: 400px) {
        top: 70%;
      }
    }
    .separador {
      top: 60%;
      width: 20%;
      left: 30%;
    }
    .hanged-mini {
      display: flex;
      position: absolute;
      top: 40%;
      right: 10%;
      width: 25%;
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
  return (
    <StyledProyectos>
      <div className="over-proyectos">
        <div className="proyectos">
          {Object.keys(proyectos).map((talent, index) => {
            return (
              <Card
                image={imageMapper[proyectos[talent].image]}
                title={proyectos[talent].title}
                description={proyectos[talent].description}
                date={proyectos[talent].date}
                name={proyectos[talent].name}
                logo={proyectos[talent].logo}
                key={index}
                className="card-project"
                id={"card-project-" + index}
              />
            );
          })}
        </div>
        <StyledProyectosPicture>
          <img
            src={whiteArrowRight}
            className="whiteArrowRight"
            alt="whiteArrowRight"
            draggable="false"
          />
          <img
            src={hanged}
            className="hanged"
            alt="hanged"
            draggable="false"
            id="contacto"
          />
          <img
            src={miniHanged}
            className="hanged-mini"
            alt="hanged-mini"
            draggable="false"
            id="contacto"
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
            <a href="mailto:info@ubiq.ad">
              <span>info@ubiq.ad</span>
            </a>
          </div>
        </StyledProyectosPicture>
        <div className="footer">
          <hr className="solid" />
          <div className="footer-text">
            <span>Andorra LA VELLA</span>
            <span className="footer-text-rights">
              <img
                src={miniLogo}
                className="miniLogo"
                alt="miniLogo"
                draggable="false"
              />
              UBIQ S.L. todos los derechos reservados
            </span>
            <span>
              <a href="mailto:info@ubiq.ad">CONTACTO</a>
            </span>
            <span>COOKIES</span>
          </div>
        </div>
      </div>
    </StyledProyectos>
  );
};

export default Proyectos;
