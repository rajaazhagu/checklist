import React from 'react'
import { FaPlus } from "react-icons/fa";
const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form className="addForm">
        <div className="user">
        <label>Add Item:</label>
   <input className="input"autoFocus type="text" placeholder="Add Item" required
   value={newItem}
   onChange={(e) => setnewItem(e.target.value)}/>
   <button className="plus"
   type="submit" onClick={handleSubmit}><FaPlus/></button>
   </div>
    </form>
  )
}

export default AddItem