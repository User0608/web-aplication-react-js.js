import React from 'react'

const Publication = ({ title, author, fecha, content }) => (
  <div>
    <article className="publication l-block">
      <div className="publication__container">
        <h2 className="publication__title t3"> {title}</h2>
        <span><b>{author}</b>a las {fecha}</span>
      </div>
      <div className="publication__content">
        <p>{content}</p>
      </div>
    </article>
  </div>
)


export default Publication
