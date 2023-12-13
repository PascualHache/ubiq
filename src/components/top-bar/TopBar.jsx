import { useState } from "react";
import styled from "styled-components";
import ubiqLogo from "./../../assets/logos/ubiq-logo.png";
import menuIcon from "./../../assets/graphics/menu-icon.svg";
import { getWindowDimension } from "../../utils/utils";
import { useOutsideClick } from "../../hooks/use-click-outside";

const StyledTopBar = styled.nav`
  height: 126px;
  width: 100%;
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 4% 0 6%;
    img {
      margin: 30px 0;
    }
    .ubiqLogo {
      height: 83px;
    }
    .menuIcon {
      height: 45px;
      padding: 0 12px;
      cursor: pointer;
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

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ededed;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: auto;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 20;

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }
`;

const TopBar = () => {
  const { width } = getWindowDimension();
  const [open, setOpen] = useState(false);
  const handleClickOutside = () => {
    setOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <StyledTopBar>
      <div className="nav-bar">
        <div className="logo">
          <img
            src={ubiqLogo}
            className="ubiqLogo"
            alt="ubiq logo"
            draggable="false"
          />
        </div>
        {width >= 1100 ? (
          <ul>
            <a href="#talento">talento</a>
            <a href="#proyectos">proyectos</a>
            <a href="#contacto">contacto</a>
          </ul>
        ) : (
          <div ref={ref}>
            <img
              src={menuIcon}
              className="menuIcon"
              alt="menuIcon"
              draggable="false"
              onClick={() => setOpen(() => !open)}
            />
            {open && (
              <StyledMenu open={open}>
                <a href="#talento">talento</a>
                <a href="#proyectos">proyectos</a>
                <a href="#contacto">contacto</a>
              </StyledMenu>
            )}
          </div>
        )}
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
