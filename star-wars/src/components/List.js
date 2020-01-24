import React from 'react';
import Row from './Row.js'
import { useSelector } from 'react-redux';

const List = () => {

  const people = useSelector(state => state.people.payload)

  return (
    <div>
      {people && people.map((item, index) => (
        <Row
          key={index}
          item={item}
        />
      ))}
    </div>
  )
}

export default List
