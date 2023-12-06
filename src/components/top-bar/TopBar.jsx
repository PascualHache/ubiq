import styled from "styled-components";
import ubiqLogo from "./../../assets/logos/ubiq-logo.png";

const StyledTopBar = styled.nav`
  height: 126px;
  width: 100%;
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 82px;
    img {
      height: 83px;
      margin: 22px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      a {
        color: #219c90;
        leading-trim: both;
        text-edge: cap;
        font-family: SoraBold;
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        margin-left: 114px;
      }
    }
  }
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <div className="nav-bar">
        <div className="logo">
          <img src={ubiqLogo} alt="ubiq logo" />
        </div>
        <ul>
          <a href="#proyectos">proyectos</a>
          <a href="#talento">talento</a>
          <a href="#contacto">contacto</a>
        </ul>
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
