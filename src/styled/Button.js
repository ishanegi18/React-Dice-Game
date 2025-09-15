import styled from "styled-components"

export const Button = styled.button `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    border: none;
    min-width: 220px;
    background: #000;
    font-size: 18px;
    border-radius: 5px;
    color: aliceblue;
     border: 2px solid transparent;
  transition: 0.5s background ease-in;

    &:hover{
        cursor: pointer;
        background-color: aliceblue;
        color: #000;
        border: 2px solid #000;
        transition: 0.3s background ease-in;
       
    }
`