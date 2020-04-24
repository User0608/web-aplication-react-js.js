import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ id, name, picture, path }) => (
  <article className="card s-border" id={id}>
    <div className="img-container s-ratio-16-9 ">
      <Link to={`${path}/${id}`}>
        <img src={picture} alt={name} className="s-radius-1" />
      </Link>
    </div>
    <div className="card__data s-pxy-2">
      <h3 className="t4 center">{name}</h3>
    </div>
  </article>
)
export default Card
