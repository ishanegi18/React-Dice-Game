import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice  from "./RollDice.jsx";
import { use, useState } from "react";
import { Button } from "../styled/Button.js";
import Rules from "./Rules.jsx";

const GamePlay = () => {
  const[error, setError] = useState()
  const[score, setScore] = useState(0)
const [selectedNumber, setselectedNumber] = useState();
const[currentDice, setcurrentDice] = useState(1);
const [showrules, setshowrules] = useState(false);




const generateRandomnumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
 const roledice = () =>{
  if (!selectedNumber) {
    setError("You have not selected any number")
    return;

  }
  setError("");
    const randomNumber = generateRandomnumber(1,7)
    setcurrentDice((prev) => randomNumber);


    if (selectedNumber == randomNumber){
      setScore((prev) => prev+randomNumber)
    }
    else{
      setScore((prev)=> prev-2)
    }
    setselectedNumber(undefined)
 }
 const resetScore =() =>{
    setScore(0)
 }
  return (
    <Maincontainer>
      <div className="top_section"> 
        <TotalScore score={score}/>
        <NumberSelector 
           error={error}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}

        />
      </div>
      <RollDice currentDice={currentDice} roledice={roledice}/>
      <div className="btns">
       <Button onClick={resetScore}>Reset</Button>
       <Button 
       onClick={() => setshowrules((prev) => !prev)}
       >{showrules ? "Hide" : "Show"} Rules</Button>
       
      </div>
      {showrules && <Rules/>}
    </Maincontainer>
  );
};

const Maincontainer = styled.main`
  padding-top: 20px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: flex-end; /* was 'end'; use valid flex value */
    gap: 20px; /* add spacing between children */
  }

  .btns{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  /* Responsive: stack on small screens */
  @media (max-width: 768px) {
    .top_section{
      flex-direction: column;      /* side-by-side on desktop, stacked on mobile */
      justify-content: center;
      align-items: center;
      text-align: center;          /* center inner text if any */
      gap: 16px;
    }
  }
`;


export default GamePlay;



