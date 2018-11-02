import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ className }) => {
    return (
        <div className={className}>
            <div>
                <Link to="/game" className="Home__link">Continue</Link>
            </div>
            <div>
                <Link to="/new-game" className="Home__link">New game</Link>
            </div>
        </div>
    );
}

export default Home;