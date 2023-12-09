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
    margin: 6%;
  }
  .card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: RobotoCondensed;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 91.618%;
    text-transform: uppercase;
    margin-top: 4%;
    .title {
      width: 60%;
    }
    .card-logo {
      width: 14%;
      height: auto;
    }
  }
  .card-subtitle {
    color: #9d9d9d;
    font-family: RobotoCondensed;
    font-size: 18.886px;
    font-style: normal;
    font-weight: 700;
    line-height: 20.575px; /* 108.944% */
    text-transform: uppercase;
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
  }
  .card-date {
    position: absolute;
    bottom: 16%;
    right: 1%;
    color: #9d9d9d;
    font-family: RobotoCondensed;
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
            <div className="title">{title}</div>
            <img src={logoEsland} alt="Logo" className="card-logo" />
          </div>
          <div className="card-subtitle">
            <div className="subtitle">{`by ${name}`}</div>
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
