import React from 'react'

const CreatePlaceBathrooms = (props) => {
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    return (
        <div className="createPlaceForm_bathrooms">
            <h2>Nombre de salle de bain</h2>
            <h3>Etape 4</h3>
            <h3>Combien y a t-il de salle de bain?</h3>
            <input type="text" name="bathrooms" id="bathrooms" value={createPlace.bathrooms} onChange={handleChange} required/>
            
            <button className="createPlaceForm_next" type="submit">Continuer</button>
        </div>
    )
}

export default CreatePlaceBathrooms
