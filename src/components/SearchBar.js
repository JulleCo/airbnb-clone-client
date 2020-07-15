import React from 'react'
import { FaSearch } from 'react-icons/fa'


function SearchBar(props) {



return (
<div className='SearchBarContainer'>
    <div className='SearchBarContainer_searchBar'>
        <span><FaSearch /><input type='text' placeholder='Où allez-vous?'/></span> 
    </div>  

    {/* filtre a ajouter pour les villes SELECT (pour rappeler le fetch ()) */}

</div>
)
}
export default SearchBar
