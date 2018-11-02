import React, { Component } from 'react';
import { clearGame } from '../../utils/gameState';
import setLevel from '../../utils/setLevel';
import NewGame from './../../components/NewGame/NewGameStyled';
import { Redirect } from 'react-router-dom';

class NewGameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToGame: false
        }
    }
    
    handleLevelSelect = level => {
        clearGame()
        setLevel(level)

        this.setState({
            redirectToGame: true
        })
    }
    
    render() {
        return this.state.redirectToGame ? <Redirect to="/game" /> : <NewGame onLevelSelect={this.handleLevelSelect} />
    }
}

export default NewGameView