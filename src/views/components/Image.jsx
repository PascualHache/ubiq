/* eslint-disable react/prop-types */
import gemita from "../../../public/talents/gemita.png";
import thegrefg from "../../../public/talents/thegrefg.png";
import gonsabella from "../../../public/talents/gonsabella.png";
import llunaclark from "../../../public/talents/llunaclark.png";
import mixwell from "../../../public/talents/mixwell.png";
import rogercarbo from "../../../public/talents/rogercarbo.png";
import paaulacg from "../../../public/talents/paaulacg.png";
import colorpaaulacg from "../../../public/talents/colorpaaulacg.png";
import colorgemita from "../../../public/talents/colorgemita.png";
import colorthegrefg from "../../../public/talents/colorthegrefg.png";
import colorgonsabella from "../../../public/talents/colorgonsabella.png";
import colorllunaclark from "../../../public/talents/colorllunaclark.png";
import colormixwell from "../../../public/talents/colormixwell.png";
import colorrogercarbo from "../../../public/talents/colorrogercarbo.png";
import styled from "styled-components";

const imageMapper = {
  gemita: gemita,
  colorgemita: colorgemita,
  gonsabella: gonsabella,
  colorgonsabella: colorgonsabella,
  llunaclark: llunaclark,
  colorllunaclark: colorllunaclark,
  mixwell: mixwell,
  colormixwell: colormixwell,
  rogercarbo: rogercarbo,
  colorrogercarbo: colorrogercarbo,
  thegrefg: thegrefg,
  colorthegrefg: colorthegrefg,
  paaulacg: paaulacg,
  colorpaaulacg: colorpaaulacg,
};

const ImageRow = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @keyframes breath-animation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .coloredImage {
    position: absolute;
    left: 0px;
    top: -3px;
    opacity: 0;
  }
  .coloredImage:hover {
    animation-name: breath-animation;
    animation-duration: 500ms;
    animation-iteration-count: ease-in-out;
    opacity: 1;
  }
`;

const Image = ({ talent }) => (
  <ImageRow>
    <a href={talent.url} target="_blank" rel="noreferrer">
      <ImageBox>
        <img src={imageMapper[talent.image]} alt="" />
        <img
          src={imageMapper["color" + talent.image]}
          className="coloredImage"
          alt=""
        />
      </ImageBox>
    </a>
  </ImageRow>
);

export default Image;
