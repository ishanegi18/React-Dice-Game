import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
    <div>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>When you click the dice, if your chosen number matches the dice roll, you score the same points as the dice value. </p>
        <p>If your guess is incorrect, 2 points will be subtracted. </p>
    </div>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #0c0c0c;
    padding:20px;
    max-width: 500px;
    margin: 30px auto;
`;