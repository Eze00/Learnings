import React from 'react';
import '../styles/Styles.css';

const Card = (props) => {
  const {name, email, id} = props;
  return (
    <div className='card-style'>
        <img alt="robots" src={`https://robohash.org/robot${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  );
}

export default Card;