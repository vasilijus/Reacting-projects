import React from 'react';

const Card = ({ movie }) => {
    return(
        <div>
            <h2> { movie.id }</h2>
            <h2> { movie.title }</h2>
        </div>
    );
};

export default Card;