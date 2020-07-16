import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Axios from 'axios'
// import Autocomplete from 'react-autocomplete';


function SearchBar(props) {

    const [city, setCity] = useState({name:'', id:''});

    // const [errorForm, setErrorForm] = useState(" ")

    const handleChange = (event) => {
        setCity({...city, [event.target.name]: event.target.value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCityName(city.name)
    }

        // const [list, setList] = useState([]);

        // useEffect(() => {
        //     Axios.get('http://localhost:8001/api/cities')
        //         .then((response) => {
        //             console.log("#111",response)
        //             console.log("#112",props)
        //             console.log("#113",props.name)
        //             console.log("#114",setCityName)
        //             setList(result.data)
        //             // setCity({ name: '', id: '' })
        //             console.log(setCity)

        //         })
        //         .catch((error) => {
        //             console.log("#222",error.response)
        //             console.log("#333",typeof error)
                    // setErrorForm(error.response.data.error)

        //         })
        // }


    return (
    <div id="searchBar" method="GET" action="/places" onSubmit={handleSubmit} className='SearchBarContainer'>
        <form className='SearchBarContainer_searchBar'>
            <input type='text' name="name" value={props.name} onChange={handleChange} placeholder='Où allez-vous?'className='SearchBarContainer_searchBar_input'/>
            <button type="submit" className='SearchBarContainer_searchBar_button'> 
                <FaSearch /> 
            </button>

        </form>  

        {/* <div>
            {
                errorForm
            }
        </div> */}
    </div>
    )
    }
export default SearchBar;
