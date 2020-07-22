import React from 'react'


function CreatePlaceName(props){
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }


    return (
        <div className="createPlaceForm_name">
            <h2>Nous allons vous aider à publier votre annonce</h2>
            <h3>Etape 1</h3>
            <h3>Quel type de logement avez-vous?</h3>
            <input type="text" name="name" id="name" value={createPlace.name} onChange={handleChange} required/>
            <input type="text" name="city" id="city" value={createPlace.idCity} onChange={handleChange} required/>
            <input type="text" name="maxGuests" id="maxGuests" value={createPlace.maxGuests} onChange={handleChange} required/>
            <button className="createPlaceForm_name_next" type="submit">Continuer</button>
        </div>
    )
}

export default CreatePlaceName
