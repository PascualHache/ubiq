import styled from "styled-components";
import logoEsland from "../../../public/projects/logo-esland.svg";

const StyledCard = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 1%;
  color: #000;
  img {
    width: 100%;
  }
  .card-block {
    margin: 8% 6% 6% 6%;
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
  }
  .card-row2 {
    display: flex;
    position: relative;
  }
  .card-description {
    color: #000;
    font-family: RobotoCondensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 82%;
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
    bottom: 14%;
    right: 1%;
    color: #9d9d9d;
    font-family: RobotoCondensedBold;
    font-size: 20.891px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    text-align: end;
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, name, description, date, id = "" }) => {
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
            <img src={logoEsland} alt="Logo" className="card-logo" />
          </div>
          {/* <div className="card-subtitle">
            <div className="subtitle">{`by ${name}`}</div>
          </div> */}
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
