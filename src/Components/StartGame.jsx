import styled from 'styled-components';
import {Button} from '../styled/Button';
const StartGame = ({toggle}) => {
  return (
    <div>
<Container>
    <img src='/dices.png'></img>
    <div className='content'>
        <h1>
            Dice Game
        </h1>
        <Button onClick={toggle}> Play Now</Button>
    </div>
</Container>
    </div>
  )
}

export default StartGame



const Container = styled.div `
    max-width :1180px ;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
   

    .content h1{
        font-size:96px;
        white-space: nowrap;
    }
`;

