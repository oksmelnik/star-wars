import React from 'react';

const Row = (props) => {

  const { name, birth_year, films } = props.item

  return (
    <p className='row'>
      <span>{name}</span>
      <span>{birth_year}</span>
      <span className='film-box'>{films.map(film => {
        return (
          <div>{film}</div>
        )
      })}
      </span>
    </p>
  )
}

export default Row
