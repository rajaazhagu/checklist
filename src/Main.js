import React from 'react'
import ItemsList from './itemList'
const Content = ({items,handleCheck,handleDelete}) => {
  console.log(items)
   return(
    <div>
       {items.length?( 
         <ItemsList
         items={items}
         handleCheck={handleCheck}
         handleDelete={handleDelete}/>
       ):(
         <p className="empty">Your List Is Empty</p>
       )}
         </div>
   )
  
}

export default Content