import React from 'react';

const Card = ({ className, id, name, onClick }) => {
    const image = require(`./images/${name}.svg`)

    return image ? (
        <li className={className}>
            <button className="Card__element" onClick={() => onClick(id, name)}>
                <div className="Card__contents Card__contents--back">
                    <img src='https://vignette.wikia.nocookie.net/parody/images/c/c1/Minion.png/revision/latest?cb=20150511014252' alt="?" />
                </div>
                <div className="Card__contents Card__contents--front">
                    <img src={image} alt={name} />
                </div>
            </button>
        </li>
    ) : null
}

export default Card;