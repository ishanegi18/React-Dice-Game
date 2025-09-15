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
align-items: flex-end;
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
       
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
.error{
  color:red;
   font-size: 16px;
   font-style: italic;
  padding: 10px;
}

  @media (max-width: 768px) {
    .flex{
      justify-content: center; /* center the grid on tablets/phones */
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    align-items: center; /* center whole section on very small screens */
    .flex{
      gap: 12px;
    }
  }
`;



const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }
`;
