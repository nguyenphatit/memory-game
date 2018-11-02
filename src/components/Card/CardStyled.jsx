import styled from 'styled-components';
import Card from './Card';
import { colors, transitions } from './../../assets/styles/variables';

const CardStyled = styled(Card)`
  width: 90px;
  height: 130px;
  position: relative;
  perspective: 360px;
  margin-bottom: 10px;
  padding: 0;

  .Card__element {
    border: none;
    outline: none;
    display: block;
    width: 100%;
    padding: 0;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: opacity .2s ${transitions.bezier},
                transform 1.5s ${transitions.bezier};
    cursor: ${props => props.show ? 'default' : 'pointer'};
    user-select: none;

    ${props => !props.show &&
      `&:hover {
        opacity: .6
      }`
    };
    
    ${props => props.show &&
      `transform: rotateY(180deg)`
    };

    img {
      width: 50px;
    }
  }

  .Card__contents {
    top: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${colors.nightBlue};
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .Card__contents--front {
    transform: rotateY(180deg);
  }
  
  .Card__contents--back {
    background-color: #dbd259;
    color: ${colors.gray};
    font-size: 50px;
  }
`

export default CardStyled