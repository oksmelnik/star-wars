import React from 'react';

const Row = (props) => {

  const { name, birth_year, films } = props.item

  return (
    <div className='row'>
      <span>{name}</span>
      <span>{birth_year}</span>
      <span className='film-box'>{films.map((film, index) => {
        return (
          <div key={index}>{film}</div>
        )
      })}
      </span>
    </div>
  )
}

export default Row
