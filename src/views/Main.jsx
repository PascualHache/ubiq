import styled from "styled-components";
import esquema1 from "./../assets/graphics/esquema1.svg";
import ubicateHeavy from "./../assets/graphics/ubicate-heavy.svg";
import leftArrow from "./../assets/graphics/left-arrow.svg";
import rightArrow from "./../assets/graphics/right-arrow.svg";
import talentos from "./../assets/graphics/talentos.svg";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  .title-big {
    padding: 40px 42px 0px 42px;
    img {
      width: 100%;
    }
  }
  .sub-title {
    width: 80%;
    display: flex;
    justify-content: start;
    h2 {
      color: #000;
      font-family: RobotoCondensedBold;
      font-size: 37px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
      max-width: 600px;
      text-align: left;
    }
  }
  .picture-frame {
    position: relative;
    width: 100vw;
    height: 100vw;
    max-width: 100%;
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
    .esquema1 {
      position: absolute;
      height: auto;
      top: 12%;
      width: 46%;
    }
    .rightArrow {
      position: absolute;
      width: 24%;
      top: 57%;
      right: 18%;
    }
    .talentos {
      position: absolute;
      top: 82%;
      width: 28%;
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
    top: 60%;
    @media (max-width: 1570px) {
      font-size: 40px;
    }
    @media (max-width: 1280px) {
      font-size: 30px;
    }
    @media (max-width: 960px) {
      font-size: 20px;
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
  }
`;

const Main = () => {
  return (
    <StyledMain id="Main">
      <div className="title-big">
        <img src={ubicateHeavy} alt="ubicateHeavy" draggable="false" />
      </div>
      <div className="sub-title">
        <h2>
          Somos una agencia de publicidad, creación de contenido y
          representación de talento.
        </h2>
      </div>
      <div className="picture-frame">
        <img
          src={leftArrow}
          className="leftArrow"
          alt="leftArrow"
          draggable="false"
        />
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
          <span className="bold">MARCAS</span> A <span>TALENTOS</span>,<br />
          <span>TALENTOS</span> A <span className="bold">AUDIENCIAS</span>
          <br />Y <span className="bold">AUDIENCIAS</span> A{" "}
          <span className="bold">MARCAS.</span>
        </div>
        <img
          src={talentos}
          className="talentos"
          alt="talentos"
          draggable="false"
        />
      </div>
    </StyledMain>
  );
};

export default Main;
