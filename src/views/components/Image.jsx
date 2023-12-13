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
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @keyframes breath-animation {
      0% {
        opacity: 0.7;
      }
      100% {
        opacity: 1;
      }
    }
  }
  img:hover {
    animation-name: breath-animation;
    animation-duration: 1s;
    animation-iteration-count: linear;
  }
`;

const ImageComponent = ({ src, hoversrc }) => (
  <ImageBox>
    <img
      src={src}
      onMouseOver={(e) => (e.currentTarget.src = hoversrc)}
      onMouseOut={(e) => (e.currentTarget.src = src)}
      alt=""
    />
  </ImageBox>
);

const Image = ({ talent }) => (
  <ImageRow>
    <a href={talent.url} target="_blank" rel="noreferrer">
      <ImageComponent
        src={imageMapper[talent.image]}
        hoversrc={imageMapper["color" + talent.image]}
      />
    </a>
  </ImageRow>
);

export default Image;
