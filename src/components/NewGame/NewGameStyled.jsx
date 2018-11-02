import styled from 'styled-components';
import NewGame from './NewGame';

const NewGameStyled = styled(NewGame)`
        position: absolute;
        top: 30%;
        left: 40%;
        text-align: center;

    .NewGame__button {
        outline: none;
        font-family: 'Cabin Sketch', cursive;
        font-size: 3rem;
        color: #dbd259;
        cursor: pointer;
        border: none;
        background: transparent;
        transition: all 0.5s ease-in;
        &:hover {
            color: #2f6cbc;
        }
    }
`

export default NewGameStyled