import styled from "styled-components";
import logoEsland from "../../../public/projects/logo-esland.svg";
import logoMinititans from "../../../public/projects/logo-minititans.svg";
import logoPingpong from "../../../public/projects/logo-pinpong.svg";

const StyledCard = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 1%;
  color: #000;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
  }
  .card-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 8% 6% 6% 6%;
    height: 100%;
  }
  .card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: RobotoCondensedBold;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    margin-top: 4%;
    @media (max-width: 1300px) {
      font-size: 26px;
    }
    @media (max-width: 1130px) {
      font-size: 22px;
    }
    @media (max-width: 960px) {
      font-size: 20px;
    }
    @media (max-width: 870px) {
      font-size: 18px;
    }
    @media (max-width: 786px) {
      font-size: 15px;
    }
    @media (max-width: 660px) {
      font-size: 30px;
    }
    .card-title-block {
      .title {
        width: 70%;
      }
      .card-subtitle {
        color: #9d9d9d;
        font-family: RobotoCondensedBold;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 108.944% */
        text-transform: uppercase;
        margin-top: 4px;
        @media (max-width: 870px) {
          font-size: 14px;
        }
        @media (max-width: 660px) {
          font-size: 18px;
        }
      }
    }
    .card-logo {
      width: 14%;
      height: auto;
    }
    .pingpong {
      width: 22%;
      height: auto;
    }
    .minititans {
      width: 26%;
      height: auto;
    }
  }
  .card-row2 {
    display: flex;
    position: relative;
    .card-description:nth-of-type(2) {
      width: 76%;
    }
    .card-description:nth-of-type(1) {
      width: 82%;
    }
  }
  .card-description {
    color: #000;
    font-family: RobotoCondensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (max-width: 1300px) {
      font-size: 14px;
    }
    @media (max-width: 870px) {
      font-size: 12px;
    }
    @media (max-width: 660px) {
      font-size: 16px;
    }
  }
  .card-date {
    position: absolute;
    bottom: 6%;
    right: -2%;
    color: #9d9d9d;
    font-family: RobotoCondensedBold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 1400px) {
      font-size: 16px;
    }
    @media (max-width: 1300px) {
      font-size: 14px;
    }

    @media (max-width: 660px) {
      font-size: 20px;
    }
  }
`;

const imageMapper = {
  esland: logoEsland,
  minititans: logoMinititans,
  pingpong: logoPingpong,
};

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, name, logo, description, date, id = "" }) => {
  // eslint-disable-next-line react/prop-types
  const arrDate = date.split(" ");
  return (
    <StyledCard id={id}>
      <img src={image} alt="Card Image" className="card-image" />
      <div className="card-block">
        <div className="card-row">
          <div className="card-title">
            <div className="card-title-block">
              <div className="title">{title}</div>
              <div className="card-subtitle">{`by ${name}`}</div>
            </div>
            <img
              src={imageMapper[logo]}
              alt="Logo"
              className={`card-logo ${logo}`}
            />
          </div>
        </div>
        <div className="card-row2">
          <p className="card-description">{description}</p>
          <div className="card-date">
            {arrDate[0]}
            <br />
            {arrDate[1]}
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
