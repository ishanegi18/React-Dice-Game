import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({error, selectedNumber, setselectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  

  console.log(selectedNumber);

  return (
    <NumberselectedContainer>
      <p className="error">{error}</p>
    <div className="flex">
      {arrNumber.map((value, i) => (
        <Box
          isSelected={value === selectedNumber}
          key={i}
          onClick={() => setselectedNumber(value)}
        >
          {value}
        </Box>
      ))}
    </div>
    <p>Selected Number</p>
    </NumberselectedContainer>
  );
};

export default NumberSelector;


const NumberselectedContainer = styled.div`


padding: 20px;
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
       
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
.error{
  color:red;
   font-size: 16px;
   font-style: italic;
  padding: 10px;
}
`;



const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 500px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
