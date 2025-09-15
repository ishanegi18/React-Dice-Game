import React, { useState } from 'react'
import styled from 'styled-components'


const RollDice = ({currentDice, roledice}) => {



  return (
    <DiceContainer>
        <div className='dice' onClick={roledice}><img src={`/dice_${currentDice}.png`} alt="" /></div>
        <p>Click on Dice to roll</p>
    </DiceContainer>

  )
}

export default RollDice;



const DiceContainer =styled.div`
display: flex;
justify-content: center;
margin-top: 48px;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;