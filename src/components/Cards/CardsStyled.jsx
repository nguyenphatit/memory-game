import styled from 'styled-components';
import Cards from './Cards';

const CardsStyled = styled(Cards)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .Cards__content {
    margin: 80px 0;
    width: 100%;
    max-width: 1000px;
  }

  .newGameLink {
    font-family: 'Cabin Sketch', cursive;
    font-size: 2rem;
    color: #dbd259;
    text-decoration: none;
    &:hover {
      color: #2f6cbc;
      transition: all 0.5s;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default CardsStyled