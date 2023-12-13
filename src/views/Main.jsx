import styled from "styled-components";
import esquema1 from "./../assets/graphics/esquema1.svg";
import ubicateHeavy from "./../assets/graphics/ubicate-heavy.svg";
import leftArrow from "./../assets/graphics/left-arrow.svg";
import rightArrow from "./../assets/graphics/right-arrow.svg";
import talentos from "./../assets/graphics/talentos.svg";
import miniTalentos from "./../assets/graphics/mini-talentos.svg";
import { getWindowDimension } from "../utils/utils";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 10;
  .title-big {
    padding: 40px 42px 0px 40px;
    z-index: 10;
    img {
      width: 100%;
    }
    @media (max-width: 660px) {
      padding: 40px 42px 0px 30px;
      img {
        width: 104%;
      }
    }
  }
  .discontinous-box {
    width: 90%;
    height: 27%;
    border-radius: 34px;
    border: 1px dashed #219c90;
    position: absolute;
    top: 1%;
    z-index: 1;
    transform: rotate(2deg);
    @media (max-width: 660px) {
      height: 26%;
    }
  }

  .discontinous-box2 {
    width: 60%;
    height: 57%;
    border-radius: 34px;
    border: 1px dashed #219c90;
    position: absolute;
    top: 14%;
    z-index: 1;
    display: flex;
    @media (max-width: 660px) {
      width: 86%;
      top: 17.5%;
      height: 56%;
    }
  }
  .sub-title {
    width: 80%;
    display: flex;
    justify-content: start;
    .width-screen-sub-title {
      color: #000;
      font-family: RobotoCondensed;
      font-size: 37px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      max-width: 600px;
      text-align: left;
      span {
        color: #219c90;
      }
    }

    .mobile-sub-title {
      color: #000;
      font-family: RobotoCondensed;
      font-size: 37px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
      text-align: left;
      @media (max-width: 920px) {
        font-size: 28px;
      }
      @media (max-width: 704px) {
        font-size: 22px;
      }
      @media (max-width: 580px) {
        font-size: 18px;
      }
      @media (max-width: 456px) {
        font-size: 14px;
      }
      @media (max-width: 390px) {
        font-size: 10px;
      }
      span {
        color: #219c90;
      }
    }
  }
  .picture-frame {
    position: relative;
    width: 100vw;
    height: 114vw;
    max-width: 100%;
    margin-bottom: -5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 660px) {
      height: 152vw;
    }
    .sub-talento {
      position: absolute;
      top: 11%;
      color: #219c90;
      font-family: RobotoCondensedBlackItalic;
      font-size: 40px;
      font-style: normal;
      font-weight: 800;
      letter-spacing: -2px;
      text-transform: uppercase;
      opacity: 0.5;
      @media (max-width: 1570px) {
        font-size: 36px;
      }
      @media (max-width: 1280px) {
        font-size: 28px;
      }
      @media (max-width: 760px) {
        font-size: 18px;
      }
      @media (max-width: 660px) {
        font-size: 16px;
        letter-spacing: 0px;
        top: 15%;
      }
      @media (max-width: 415px) {
        font-size: 10px;
      }
    }
    .leftArrow {
      position: absolute;
      top: 2%;
      left: 6%;
      width: 28%;
      height: auto;
    }
    .esquema1 {
      position: absolute;
      height: auto;
      top: 18%;
      width: 46%;
      @media (max-width: 660px) {
        top: 42%;
      }
    }
    .rightArrow {
      position: absolute;
      width: 24%;
      top: 63%;
      right: 18%;
      @media (max-width: 660px) {
        top: 65%;
        width: 36%;
        right: 2%;
      }
    }
    .talentos {
      position: absolute;
      top: 82%;
      width: 28%;
      @media (max-width: 660px) {
        top: 86%;
        width: 40%;
      }
    }
  }
  .aim-box {
    font-family: RobotoLightItalic;
    color: #000;
    font-size: 50px;
    text-align: center;
    line-height: normal;
    text-transform: uppercase;
    font-weight: 300;
    position: absolute;
    top: 58%;
    @media (max-width: 1570px) {
      font-size: 40px;
    }
    @media (max-width: 1280px) {
      font-size: 30px;
    }
    @media (max-width: 960px) {
      font-size: 20px;
    }
    @media (max-width: 660px) {
      top: 20%;
      font-size: 36px;
    }
    @media (max-width: 580px) {
      font-size: 26px;
    }
    @media (max-width: 490px) {
      font-size: 20px;
    }
    @media (max-width: 380px) {
      font-size: 16px;
    }
    span {
      font-weight: 900;
      color: #219c90;
      font-family: RobotoCondensedBlackItalic;
    }
    .bold {
      font-family: RobotoCondensedBlackItalic;
      color: #000;
    }
    .underline {
      text-decoration: underline;
    }
  }
`;

const Main = () => {
  const { width } = getWindowDimension();
  return (
    <StyledMain id="Main">
      <div className="title-big">
        <img src={ubicateHeavy} alt="ubicateHeavy" draggable="false" />
      </div>
      <div className="discontinous-box" />
      <div className="sub-title">
        {width > 1100 ? (
          <div className="width-screen-sub-title">
            Somos una agencia de <span>publicidad</span>, creación de{" "}
            <span>contenido</span> y representación de <span>talento</span>.
          </div>
        ) : (
          <div className="mobile-sub-title">
            Somos una agencia de <span>publicidad</span>, creación de{" "}
            <span>contenido</span> y representación de <span>talento</span>.
          </div>
        )}
      </div>
      <div className="picture-frame">
        <div className="discontinous-box2" />
        <img
          src={leftArrow}
          className="leftArrow"
          alt="leftArrow"
          draggable="false"
        />
        <div className="sub-talento">
          especializados en ubicarte donde quieras estar
        </div>
        <img
          src={esquema1}
          className="esquema1"
          alt="esquema 1"
          draggable="false"
        />
        <img
          src={rightArrow}
          className="rightArrow"
          alt="rightArrow"
          draggable="false"
        />
        <div className="aim-box">
          ACERCAMOS
          <br />
          <span className="bold">MARCAS</span> A <span>TALENTOS</span>
          ,<br />
          <span>TALENTOS</span> A <span className="bold">AUDIENCIAS</span>
          <br />Y <span className="bold">AUDIENCIAS</span> A{" "}
          <span className="bold">MARCAS.</span>
        </div>
        {width > 660 ? (
          <img
            src={talentos}
            className="talentos"
            alt="talentos"
            draggable="false"
            id="talento"
          />
        ) : (
          <img
            src={miniTalentos}
            className="talentos"
            alt="talentos"
            draggable="false"
            id="talento"
          />
        )}
      </div>
    </StyledMain>
  );
};

export default Main;
