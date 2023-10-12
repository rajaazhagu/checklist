import React from 'react';
import Footer from './Footer';
import Header from './Head';
import Content from './Main';
import { useState } from 'react';
import AddItem from './AddItem';
import Text from './Text';
import SearchItem from './SearchItem';
function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')));
const [newItem,setnewItem]=useState("")
const [search,setSearch]=useState('')
const additem=(item)=>{
     const id=items.length?items[items.length-1].id+1:1
const addNewItem={id,checked:false,item}
const listItems=[...items,addNewItem]
setItems(listItems)
localStorage.setItem("todo_list",JSON.stringify(listItems))}
const handleCheck=(id)=>{
    const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
} 
const handleSubmit=(e)=>{
  e.preventDefault()
   additem(newItem)
  setnewItem("")
}
    
return (
    <div className="app">
      <Header />
      <AddItem 
      newItem={newItem}
      setnewItem={setnewItem}
      handleSubmit={handleSubmit}
      items={items}/>
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Footer
      length={items.length } />
      <Text/>
      <Content 
       items={items.filter((item)=>(
        (item.item).includes(search)))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}/>
      
   </div>
  )}
export default App
