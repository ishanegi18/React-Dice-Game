import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/dices.png" alt="dice" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: row; /* default = row for desktop */
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }

  .content h1 {
    font-size: 64px;
    white-space: nowrap;
  }

  /* Tablet and smaller: stack vertically */
  @media (max-width: 768px) {
    flex-direction: column;

    .content h1 {
      font-size: 36px;
      text-align: center;
      white-space: normal; /* allow wrapping on small screens */
    }
  }

  @media (max-width: 480px) {
    .content h1 {
      font-size: 28px;
    }
  }
`;