import React from 'react'

function CreatePlaceRooms(props){
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    return (
        <div className="createPlaceForm_rooms">
            <h2>Nombre de chambres</h2>
            <h3>Etape 3</h3>
            <h3>Combien y a t-il de chambres?</h3>
            <input type="text" name="rooms" id="rooms" value={createPlace.rooms} onChange={handleChange} required/>
            
            <button className="createPlaceForm_next" type="submit">Continuer</button>
        </div>
    )
}
export default CreatePlaceRooms
