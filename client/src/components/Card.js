import React from 'react';

const Card = props => {
    return (
        <div className='character-card'>
            <h3>who i am: {props.wemon.name}</h3>
            <p>where im from: {props.wemon.country}</p>
            <p>searches: {props.wemon.searches}</p>
        </div>
    )
}

export default Card;