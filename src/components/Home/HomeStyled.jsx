import styled from 'styled-components'

import Home from './Home'

const HomeStyled = styled(Home)`
  display: flex;
  font-family: 'Cabin Sketch', cursive;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  position: absolute;
  top: 30%;
  left: 10%;

  .Home__link {
    font-size: 5em;
    color: #dbd259;
    text-decoration: none;
    transition: all 0.5s ease-in;
    &:hover {
      color: #2f6cbc;
    }
  }

  @media (max-width: 600px) {
    .Home__link {
		font-size: 3em;
		color: #fff;
		text-decoration: none;
		transition: all 0.5s ease-in;
		&:hover {
		color: yellow;
		}
	}
  }
`

export default HomeStyled
