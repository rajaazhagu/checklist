import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='addForm' >
        <div className='user'>
        <label>
            SearchItems:
        </label>
        <input className="input "type='text'
        placeholder='search Items'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}} />
     </div>
    </form>
  )
}

export default SearchItem