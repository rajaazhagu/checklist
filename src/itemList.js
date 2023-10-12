import React from 'react'
import LineItem from './LineItem';
const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <div className="main">
        <ul>
        {items.map((item)=>(
            <LineItem
            item={item}
            key={item.id}
         handleCheck={handleCheck}
         handleDelete={handleDelete}/>
         ))}
         </ul>
    </div>
  )
}

export default ItemsList