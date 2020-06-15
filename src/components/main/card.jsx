import React from 'react';
import {Link} from 'react-router-dom';

export default function Card({card}) {
  return (
    <div key={card.id} class="card">
      {card.name}
      {card.id}
    </div>
  )
}

