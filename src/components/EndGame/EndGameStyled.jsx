import styled from 'styled-components'

import EndGame from './EndGame'

const EndGameStyled = styled(EndGame)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #dbd259;
  font-size: 30px;
  line-height: 1.5;
  font-family: 'Cabin Sketch', cursive;
    
  .youWonText {
    display: block;
    text-align: center;
  }
  
  .newGameLink {
    color: #dbd259;
    text-decoration: none;
    
    &:hover {
      opacity: .8
    }
  }
`

export default EndGameStyled
