import React from 'react';
import Row from './Row.js'
import { useSelector } from 'react-redux';

const List = (props) => {

  const people = useSelector(state => state.list.payload)

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
