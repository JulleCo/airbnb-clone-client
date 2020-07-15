import React from 'react'
import { FaSearch } from 'react-icons/fa'
function SearchBar() {

return (
<div className='SearchBarContainer'>
    <div className='SearchBarContainer_searchBar'>
        <span><FaSearch /><input type='text' placeholder='Où allez-vous?'/></span> 
    </div>  
</div>
)
}
export default SearchBar
