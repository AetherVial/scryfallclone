import React from 'react';
// import {Link} from 'react-router-dom';

export default function Card({card}) {
  return (
    <div key={card.id} className="card">
      <img src={card.image_uris.normal} alt=""/>
    </div>
  )
}

