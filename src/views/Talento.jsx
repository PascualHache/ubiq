import styled from "styled-components";

const StyledTalento = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #bd9dcf;
`;

const Talento = () => {
  return <StyledTalento id="talento">tema 1</StyledTalento>;
};

export default Talento;
