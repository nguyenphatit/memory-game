import React, { Component } from 'react';

class NewGame extends Component {

    onLevelSelect = level => {
        this.props.onLevelSelect(level);
    }
    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <div>
                    <button className="NewGame__button" onClick={() => this.onLevelSelect('easy')}>
                        Easy
                    </button>
                </div>
                <div>
                    <button className="NewGame__button" onClick={() => this.onLevelSelect('medium')}>
                        Medium
                    </button>
                </div>
                <div>
                    <button className="NewGame__button" onClick={() => this.onLevelSelect('hard')}>
                        Hard
                    </button>
                </div>
                <div>
                    <button className="NewGame__button" onClick={() => this.onLevelSelect('very-hard')}>
                        Very hard
                    </button>
                </div>
            </div>
        );
    }
}

export default NewGame;