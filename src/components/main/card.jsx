import React from 'react';
// import {Link} from 'react-router-dom';

export default function Card({card}) {
  let image;

  if (card.card_faces) {
    image = card.card_faces[0].image_uris.normal
  } else {
    image = card.image_uris.normal
  }
 
  return (
    <div key={card.id} className="card">
      <img className="card-index-image" src={image} alt=""/>
    </div>
  )
}

