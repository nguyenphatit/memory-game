import React from 'react';
import { chunk } from 'lodash';
import Card from './../Card/CardStyled';
import { Link } from 'react-router-dom';
import music from './../../assets/media/bg.mp3';

const Cards = ({ cards, className, onClick }) => {
    const chunkedCards = chunk(cards, 10)

    return (
        <div className={className}>
            <div>
                <Link to="/" className="newGameLink">
                    Home
                </Link>
            </div>
            <div className="Cards__content">
                {chunkedCards.map((cards, index) =>
                    <ul key={index}>
                        {cards.map((card, index) =>
                            <Card
                                className="Card"
                                id={card.id}
                                key={`${card.name}--${index}`}
                                name={card.name}
                                onClick={() => !card.show && onClick(card.id, card.name)}
                                show={card.show}
                            />
                        )}
                    </ul>
                )}
            </div>
            <audio src={music} controls autoPlay loop/>
        </div>
    )
}

export default Cards