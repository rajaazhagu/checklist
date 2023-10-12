import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
        <li className="list" key={item.id}>
              <input
                  type="checkbox"
                  onClick={()=>handleCheck(item.id)}
                  checked={item.checked}
                  />
                 <label onClick={()=>handleCheck(item.id)}>{item.item}</label>
                 <FaTrashAlt onClick={()=>handleDelete(item.id)}
                 role="button"
                />
            </li>
  )
}

export default LineItem